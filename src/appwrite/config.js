import conf from '../conf.js'
import { Client, Account, ID } from 'appwrite'
export class Service {
    client = new Client();
    database;
    bucket;
    constructor() {
        this.client
            .setEndPoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Database(this.client)
        this.bucket = new Storage(this.client)
    }
    async createPost({ title, slug, content, featureImage, status, useId }){

        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                    userId,
                }
                )
                
            }catch
        }
        }

const service = new Service()
export default service