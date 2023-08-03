import TabsLayout from './TabsLayout'
import ContentLayout from './ContentLayout'

export default function Datasets() {
  // const [currentTab, setCurrentTab] = useState<DatasetsTabItem>('Tasks')

  return (
    <main className="flex flex-1 flex-col">
      <div className="SVELTE_HYDRATER contents" data-props="" data-target="DatasetList">
        <div className="container relative flex flex-col lg:grid lg:space-y-0 w-full lg:grid-cols-10 md:flex-1 md:grid-rows-full  md:gap-6 ">
          <TabsLayout />
          <ContentLayout />
        </div>
      </div>
    </main>
  )
}
