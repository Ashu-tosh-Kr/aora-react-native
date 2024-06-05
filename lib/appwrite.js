const client = new Client();

export const appwriteConfigObject = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "dev.ashu.aora",
  projectId: "666057d100077724106c",
  databaseId: "66605933000079ce431c",
  userCollectionId: "66605961000a143ccf57",
  videoCollectionId: "66605993001ed7ede237",
  storageId: "66605ae7002775552732",
};

import { Client, Account, ID, Avatars, Databases } from "react-native-appwrite";
// Init your React Native SDK

client
  .setEndpoint(appwriteConfigObject.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfigObject.projectId) // Your project ID
  .setPlatform(appwriteConfigObject.platform); // Your application ID or bundle ID.

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
      appwriteConfigObject.databaseId,
      appwriteConfigObject.userCollectionId,
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
