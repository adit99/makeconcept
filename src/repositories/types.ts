import type { MiniApp, AppEntry, AppVersion } from '../types'

export interface IAppRepository {
  getAllApps(): Promise<MiniApp[]>
  getApp(id: string): Promise<MiniApp | undefined>
  saveApp(app: MiniApp): Promise<void>
  deleteApp(id: string): Promise<void>
  getEntriesForApp(appId: string): Promise<AppEntry[]>
  saveEntry(entry: AppEntry): Promise<void>
  deleteEntry(entryId: string): Promise<void>
  getVersionsForApp(appId: string): Promise<AppVersion[]>
  saveVersion(version: AppVersion): Promise<void>
}
