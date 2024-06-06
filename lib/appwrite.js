const client = new Client();

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "dev.ashu.aora",
  projectId: "666057d100077724106c",
  databaseId: "66605933000079ce431c",
  userCollectionId: "66605961000a143ccf57",
  videoCollectionId: "66605993001ed7ede237",
  storageId: "66605ae7002775552732",
};

import {
  Client,
  Account,
  ID,
  Avatars,
  Databases,
  Query,
} from "react-native-appwrite";
// Init your React Native SDK

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, name) => {
  try {
    const newAccount = await account.create(ID.unique(), email, password, name);
    if (!newAccount) throw Error;
    const avatar = avatars.getInitials(name);
    await signIn(email, password);
    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        username: name,
        email,
        avatar,
      }
    );
    return newUser;
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

export async function signIn(email, password) {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    if (!session) throw Error;
    return session;
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw Error;
    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );
    if (!currentUser) throw Error;
    return currentUser.documents[0];
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

export const getAllPosts = async () => {
  try {
    const posts = await databases.listDocuments(
      config.databaseId,
      config.videoCollectionId
    );
    if (!posts) throw Error;
    return posts.documents;
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

export const getLatestPosts = async () => {
  try {
    const posts = await databases.listDocuments(
      config.databaseId,
      config.videoCollectionId,
      [Query.orderDesc("$createdAt", Query.limit(7))]
    );
    if (!posts) throw Error;
    return posts.documents;
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

export const searchPosts = async (query) => {
  try {
    const posts = await databases.listDocuments(
      config.databaseId,
      config.videoCollectionId,
      [Query.search("title", query)]
    );
    if (!posts) throw Error;
    return posts.documents;
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

export async function getUserPosts(userId) {
  try {
    const posts = await databases.listDocuments(
      config.databaseId,
      config.videoCollectionId,
      [Query.equal("creator", userId)]
    );

    return posts.documents;
  } catch (error) {
    throw new Error(error);
  }
}

export async function signOut() {
  try {
    const session = await account.deleteSession("current");

    return session;
  } catch (error) {
    throw new Error(error);
  }
}
