import type { MiniApp, AppEntry, AppVersion } from '../types'
import type { IAppRepository } from './types'
import { db } from '../db/db'

export class DexieAppRepository implements IAppRepository {
  async getAllApps(): Promise<MiniApp[]> {
    return db.apps.orderBy('createdAt').reverse().toArray()
  }

  async getApp(id: string): Promise<MiniApp | undefined> {
    return db.apps.get(id)
  }

  async saveApp(app: MiniApp): Promise<void> {
    await db.apps.put(app)
  }

  async deleteApp(id: string): Promise<void> {
    await db.apps.delete(id)
    await db.entries.where('appId').equals(id).delete()
    await db.versions.where('appId').equals(id).delete()
  }

  async getEntriesForApp(appId: string): Promise<AppEntry[]> {
    return db.entries.where('appId').equals(appId).sortBy('createdAt')
  }

  async saveEntry(entry: AppEntry): Promise<void> {
    await db.entries.put(entry)
  }

  async deleteEntry(entryId: string): Promise<void> {
    await db.entries.delete(entryId)
  }

  async getVersionsForApp(appId: string): Promise<AppVersion[]> {
    return db.versions.where('appId').equals(appId).sortBy('createdAt')
  }

  async saveVersion(version: AppVersion): Promise<void> {
    await db.versions.put(version)
  }
}
