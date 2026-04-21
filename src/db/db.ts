import Dexie, { type Table } from 'dexie'
import type { MiniApp, AppEntry, AppVersion } from '../types'

export class MakeAppDB extends Dexie {
  apps!: Table<MiniApp, string>
  entries!: Table<AppEntry, string>
  versions!: Table<AppVersion, string>

  constructor() {
    super('makeapp')
    this.version(1).stores({
      apps: 'id, name, createdAt, updatedAt',
      entries: 'id, appId, createdAt',
      versions: 'id, appId, createdAt',
    })
  }
}

export const db = new MakeAppDB()
