import { DatasetItem, DatasetsTabItem } from './type'

export const DatasetList: DatasetItem[] = [...Array(30)].map(() => ({
  title: 'fka/awesome-chatgpt-prompts',
  tableType: 'viewer',
  dateTime: '2023-03-07T10:04:18',
  timeTitle: 'Tue, 07 Mar 2023 10:04:18 GMT',
  date: 'Mar 7',
  downloads: '2.05k',
  favorites: '2.81k',
}))

export const DatasetsTabList: DatasetsTabItem[] = ['Tasks', 'Sizes', 'Sub-tasks', 'Languages', 'Licenses', 'Other']
