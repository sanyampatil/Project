console.log(
  'import.meta.env.VITE_APPWRITE_URL',
  import.meta.env.VITE_APPWRITE_URL
)

console.log(
  'import.meta.env.VITE_APPWRITE_PROJECT_ID',
  import.meta.env.VITE_APPWRITE_PROJECT_ID
)

console.log(
  'import.meta.env.VITE_APPWRITE_DATABASE_ID',
  import.meta.env.VITE_APPWRITE_DATABASE_ID
)

console.log(
  'import.meta.env.VITE_APPWRITE_COLLECTION_ID',
  import.meta.env.VITE_APPWRITE_COLLECTION_ID
)

console.log(
  'import.meta.env.VITE_APPWRITE_BUCKET_ID',
  import.meta.env.VITE_APPWRITE_BUCKET_ID
)
const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default conf
