import { DatasetSVG, DownloadSVG, FavoriteSVG, TablePreviewSVG, TableViewerSVG } from "ui/svgs"
import { AudioClassificationSVG, AudiotoAudioSVG, AutomaticSpeechRecognitionSVG, ConversationalSVG, DepthEstimationSVG, FeatureExtractionSVG, FillMaskSVG, GraphMachineLearningSVG, ImageClassificationSVG, ImageSegmentationSVG, ImageToImageSVG, ImageToTextSVG, MultipleChoiceSVG, ObjectDetectionSVG, QuestionAnsweringSVG, SentenceSimilaritySVG, SummarizationSVG, TableQuestionAnsweringSVG, TableToTextSVG, TabularClassificationSVG, TabularRegressionSVG, TabularToTextSVG, Text2TextGenerationSVG, TextClassificationSVG, TextGenerationSVG, TextRetrievalSVG, TextToImageSVG, TextToSpeechSVG, TextToVideoSVG, TimeSeriesForecastingSVG, TokenClassificationSVG, TranslationSVG, UnconditionalImageGenerationSVG, VideoClassificationSVG, VisualQuestionAnsweringSVG, VoiceActivityDetectionSVG, ZeroShotClassificationSVG, ZeroShotImageClassificationSVG } from "ui/svgs/classes"


export interface DatasetItem {
  title: string
  tableType: 'viewer' | 'preview'
  dateTime: string
  timeTitle: string
  date: string
  downloads: string
  favorites: string
}

export interface DatasetCardProps {
  item: DatasetItem
}

const DatasetCard = ({ item }: DatasetCardProps) => {
  const { title, tableType, dateTime, timeTitle, date, downloads, favorites } = item
  return (
    <article className="overview-card-wrapper group  ">
      <a className="block p-2" href={`/datasets/${title}`}>
        <header className="flex items-center mb-0.5" title={title}>
          <DatasetSVG />
          <h4
            className="text-md truncate font-mono text-black dark:group-hover:text-yellow-500 group-hover:text-red-600 text-smd">
            {title}</h4>
        </header>
        <div
          className="mr-1 flex items-center overflow-hidden whitespace-nowrap text-sm leading-tight text-gray-400">
          { tableType === 'viewer' && <TableViewerSVG /> }
          { tableType === 'preview' && <TablePreviewSVG /> }
          { tableType === 'viewer' && 'Viewer' }
          { tableType === 'preview' && 'Preview' }
          <span className="px-1.5 text-gray-300">• </span>
          <span className="truncate">
            Updated
            <time dateTime={dateTime} title={timeTitle}>{date}</time>
          </span>
          <span className="px-1.5 text-gray-300">• </span>
          <DownloadSVG />
          {downloads}
          <span className="px-1.5 text-gray-300">• </span>
          <FavoriteSVG />
          {favorites}
        </div>
      </a>
    </article>
  )
}

export const datasetList: DatasetItem[] = [...Array(30)].map(() => (
  { title: 'fka/awesome-chatgpt-prompts', tableType: 'viewer', dateTime: '2023-03-07T10:04:18', timeTitle: 'Tue, 07 Mar 2023 10:04:18 GMT', date: 'Mar 7', downloads: '2.05k', favorites: '2.81k' }
))

export default function Datasets() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="SVELTE_HYDRATER contents"
        data-props=""
        data-target="datasetList">
        <div
          className="container relative flex flex-col lg:grid lg:space-y-0 w-full lg:grid-cols-10 md:flex-1 md:grid-rows-full  md:gap-6 ">
          <section className="pt-8 border-gray-100 bg-white lg:static lg:px-0 lg:col-span-4 xl:col-span-3 lg:border-r lg:bg-gradient-to-l from-gray-50-to-white
			hidden lg:block ">
            <div className="mb-4 flex items-center justify-between lg:hidden">
              <h3 className="text-base font-semibold">Edit Datasets filters</h3>
              <button className="text-xl" type="button">
                <svg className="" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true" focusable="false" role="img" width="1.1em" height="1.1em"
                  preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                  <path
                    d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"
                    fill="currentColor"></path>
                </svg>
              </button>
            </div>
            <ul className="flex gap-1 text-sm flex-wrap mt-1.5 mb-5">
              <li>
                <button
                  className="flex items-center whitespace-nowrap rounded-lg px-2 bg-black text-white dark:bg-gray-800">Tasks
                </button>
              </li>
              <li>
                <button
                  className="flex items-center whitespace-nowrap rounded-lg px-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-900 dark:hover:text-gray-300">Sizes
                </button>
              </li>
              <li>
                <button
                  className="flex items-center whitespace-nowrap rounded-lg px-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-900 dark:hover:text-gray-300">Sub-tasks
                </button>
              </li>
              <li>
                <button
                  className="flex items-center whitespace-nowrap rounded-lg px-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-900 dark:hover:text-gray-300">Languages
                </button>
              </li>
              <li>
                <button
                  className="flex items-center whitespace-nowrap rounded-lg px-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-900 dark:hover:text-gray-300">Licenses
                </button>
              </li>
              <li>
                <button
                  className="flex items-center whitespace-nowrap rounded-lg px-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-900 dark:hover:text-gray-300">Other
                </button>
              </li>
            </ul>
            <div className="mb-20 lg:mb-4">
              <div className="mb-4 flex items-center justify-between lg:mr-8">
                <div className="relative flex min-w-0 flex-1 items-center">
                  <svg className="absolute text-gray-300 pointer-events-none left-2 text-sm"
                    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                    focusable="false" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 32 32">
                    <path d="M30 28.59L22.45 21A11 11 0 1 0 21 22.45L28.59 30zM5 14a9 9 0 1 1 9 9a9 9 0 0 1-9-9z"
                      fill="currentColor"></path>
                  </svg>
                  <input
                    className="h-7 min-w-0 flex-1 rounded-full border border-gray-200/70 bg-white pl-7 text-sm placeholder-gray-400 ring-0 focus:outline-none"
                    autoComplete="off" placeholder="Filter Tasks by name" type="text" value="" readOnly />
                </div>
              </div>
              <div className="mb-3">
                <div className="mb-3 text-sm font-medium text-gray-500">Multimodal
                </div>
                <div className="flex flex-wrap">
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Afeature-extraction">
                    <div className="tag-ico tag-ico-red">
                      <FeatureExtractionSVG />
                    </div>
                    <span>Feature Extraction</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Atext-to-image">
                    <div className="tag-ico tag-ico-yellow">
                      <TextToImageSVG />
                    </div>
                    <span>Text-to-Image</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Aimage-to-text">
                    <div className="tag-ico tag-ico-red">
                      ​<ImageToTextSVG />
                    </div>
                    <span>Image-to-Text</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Atext-to-video">
                    <div className="tag-ico tag-ico-green">
                      <TextToVideoSVG />
                    </div>
                    <span>Text-to-Video</span>
                  </a>
                  <a className="tag  tag-white"
                    href="/datasets?task_categories=task_categories%3Avisual-question-answering">
                    <div className="tag-ico tag-ico-red">
                      <VisualQuestionAnsweringSVG />
                    </div>
                    <span>Visual Question Answering</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Agraph-ml">
                    <div className="tag-ico tag-ico-green">
                      <GraphMachineLearningSVG />
                    </div>
                    <span>Graph Machine Learning</span>
                  </a>
                </div>
              </div>
              <div className="mb-3">
                <div className="mb-3 text-sm font-medium text-gray-500">Computer Vision
                </div>
                <div className="flex flex-wrap">
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Adepth-estimation">
                    <div className="tag-ico tag-ico-yellow">
                      <DepthEstimationSVG />
                    </div>
                    <span>Depth Estimation</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Aimage-classification">
                    <div className="tag-ico tag-ico-blue">
                      <ImageClassificationSVG />
                    </div>
                    <span>Image Classification</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Aobject-detection">
                    <div className="tag-ico tag-ico-yellow">
                      <ObjectDetectionSVG />
                    </div>
                    <span>Object Detection</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Aimage-segmentation">
                    <div className="tag-ico tag-ico-green">
                      <ImageSegmentationSVG />
                    </div>
                    <span>Image Segmentation</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Aimage-to-image">
                    <div className="tag-ico tag-ico-indigo">
                      <ImageToImageSVG />
                    </div>
                    <span>Image-to-Image</span>
                  </a>
                  <a className="tag  tag-white"
                    href="/datasets?task_categories=task_categories%3Aunconditional-image-generation">
                    <div className="tag-ico tag-ico-green">
                      <UnconditionalImageGenerationSVG />
                    </div>
                    <span>Unconditional Image Generation</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Avideo-classification">
                    <div className="tag-ico tag-ico-blue">
                      <VideoClassificationSVG />
                    </div>
                    <span>Video Classification</span>
                  </a>
                  <a className="tag  tag-white"
                    href="/datasets?task_categories=task_categories%3Azero-shot-image-classification">
                    <div className="tag-ico tag-ico-yellow">
                      <ZeroShotImageClassificationSVG />
                    </div>
                    <span>Zero-Shot Image Classification</span>
                  </a>
                </div>
              </div>
              <div className="mb-3">
                <div className="mb-3 text-sm font-medium text-gray-500">Natural Language Processing
                </div>
                <div className="flex flex-wrap">
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Atext-classification">
                    <div className="tag-ico tag-ico-orange">
                      <TextClassificationSVG />
                    </div>
                    <span>Text Classification</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Atoken-classification">
                    <div className="tag-ico tag-ico-blue">
                      <TokenClassificationSVG />
                    </div>
                    <span>Token Classification</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Atable-question-answering">
                    <div className="tag-ico tag-ico-green">
                      <TableQuestionAnsweringSVG />
                    </div>
                    <span>Table Question Answering</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Aquestion-answering">
                    <div className="tag-ico tag-ico-blue">
                      <QuestionAnsweringSVG />
                    </div>
                    <span>Question Answering</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Azero-shot-classification">
                    <div className="tag-ico tag-ico-yellow">
                      <ZeroShotClassificationSVG />
                    </div>
                    <span>Zero-Shot Classification</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Atranslation">
                    <div className="tag-ico tag-ico-green">
                      <TranslationSVG />
                    </div>
                    <span>Translation</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Asummarization">
                    <div className="tag-ico tag-ico-indigo">
                      <SummarizationSVG />
                    </div>
                    <span>Summarization</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Aconversational">
                    <div className="tag-ico tag-ico-green">
                      <ConversationalSVG />
                    </div>
                    <span>Conversational</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Atext-generation">
                    <div className="tag-ico tag-ico-indigo">
                      <TextGenerationSVG />
                    </div>
                    <span>Text Generation</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Atext2text-generation">
                    <div className="tag-ico tag-ico-indigo">
                      <Text2TextGenerationSVG />
                    </div>
                    <span>Text2Text Generation</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Afill-mask">
                    <div className="tag-ico tag-ico-red">
                      <FillMaskSVG />
                    </div>
                    <span>Fill-Mask</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Asentence-similarity">
                    <div className="tag-ico tag-ico-yellow">
                      <SentenceSimilaritySVG />
                    </div>
                    <span>Sentence Similarity</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Atable-to-text">
                    <div className="tag-ico tag-ico-blue">
                      <TableToTextSVG />
                    </div>
                    <span>Table to Text</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Amultiple-choice">
                    <div className="tag-ico tag-ico-blue">
                      <MultipleChoiceSVG />
                    </div>
                    <span>Multiple Choice</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Atext-retrieval">
                    <div className="tag-ico tag-ico-indigo">
                      <TextRetrievalSVG />
                    </div>
                    <span>Text Retrieval</span>
                  </a>
                </div>
              </div>
              <div className="mb-3">
                <div className="mb-3 text-sm font-medium text-gray-500">Audio
                </div>
                <div className="flex flex-wrap">
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Atext-to-speech">
                    <div className="tag-ico tag-ico-yellow">
                      <TextToSpeechSVG />
                    </div>
                    <span>Text-to-Speech</span>
                  </a>
                  <a className="tag  tag-white"
                    href="/datasets?task_categories=task_categories%3Aautomatic-speech-recognition">
                    <div className="tag-ico tag-ico-yellow">
                      <AutomaticSpeechRecognitionSVG />
                    </div>
                    <span>Automatic Speech Recognition</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Aaudio-to-audio">
                    <div className="tag-ico tag-ico-blue">
                      <AudiotoAudioSVG />
                    </div>
                    <span>Audio-to-Audio</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Aaudio-classification">
                    <div className="tag-ico tag-ico-green">
                      <AudioClassificationSVG />
                    </div>
                    <span>Audio Classification</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Avoice-activity-detection">
                    <div className="tag-ico tag-ico-red">
                      <VoiceActivityDetectionSVG />
                    </div>
                    <span>Voice Activity Detection</span>
                  </a>
                </div>
              </div>
              <div className="mb-3">
                <div className="mb-3 text-sm font-medium text-gray-500">Tabular
                </div>
                <div className="flex flex-wrap">
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Atabular-classification">
                    <div className="tag-ico tag-ico-blue">
                      <TabularClassificationSVG />
                    </div>
                    <span>Tabular Classification</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Atabular-regression">
                    <div className="tag-ico tag-ico-blue">
                      <TabularRegressionSVG />
                    </div>
                    <span>Tabular Regression</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Atabular-to-text">
                    <div className="tag-ico tag-ico-blue">
                      <TabularToTextSVG />
                    </div>
                    <span>Tabular to Text</span>
                  </a>
                  <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Atime-series-forecasting">
                    <div className="tag-ico tag-ico-blue">
                      <TimeSeriesForecastingSVG />
                    </div>
                    <span>Time Series Forecasting</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="fixed inset-x-4 bottom-0 flex h-16 items-center border-t bg-white dark:bg-gray-950 lg:hidden">
              <button className="btn btn-lg -mt-px w-full font-semibold" type="button">
                <svg className="mr-1.5 text-blue-500" xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img" width="1em"
                  height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                  <path d="M13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z" fill="currentColor"></path>
                </svg>
                Apply filters
              </button>
            </div>
          </section>
          <section className="pt-8 border-gray-100 col-span-full lg:col-span-6 xl:col-span-7 pb-12">
            <div className="mb-4 items-center space-y-3 md:flex md:space-y-0 lg:mb-6">
              <div className="flex items-center text-lg">
                <h1>Datasets</h1>
                <div className="ml-3 w-16 font-normal text-gray-400">49,419</div>
              </div>
              <div className="flex-1 md:mx-4">
                <div className="relative w-full md:max-w-xs">
                  <svg className="absolute left-2 top-1.5 text-gray-300 w-4" xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img"
                    width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 25 25">
                    <ellipse cx="12.5" cy="5" fill="currentColor" fillOpacity="0.25" rx="7.5" ry="2"></ellipse>
                    <path
                      d="M12.5 15C16.6421 15 20 14.1046 20 13V20C20 21.1046 16.6421 22 12.5 22C8.35786 22 5 21.1046 5 20V13C5 14.1046 8.35786 15 12.5 15Z"
                      fill="currentColor" opacity="0.5"></path>
                    <path
                      d="M12.5 7C16.6421 7 20 6.10457 20 5V11.5C20 12.6046 16.6421 13.5 12.5 13.5C8.35786 13.5 5 12.6046 5 11.5V5C5 6.10457 8.35786 7 12.5 7Z"
                      fill="currentColor" opacity="0.5"></path>
                    <path
                      d="M5.23628 12C5.08204 12.1598 5 12.8273 5 13C5 14.1046 8.35786 15 12.5 15C16.6421 15 20 14.1046 20 13C20 12.8273 19.918 12.1598 19.7637 12C18.9311 12.8626 15.9947 13.5 12.5 13.5C9.0053 13.5 6.06886 12.8626 5.23628 12Z"
                      fill="currentColor"></path>
                  </svg>
                  <input
                    className="w-full rounded-full border border-gray-200 text-sm placeholder-gray-400 shadow-inner outline-none focus:shadow-xl focus:ring-1 focus:ring-inset dark:bg-gray-950 h-7 pl-7"
                    placeholder="Filter by name" type="search" value="" readOnly />
                </div>
              </div>
              <a href="/search/full-text?type=dataset"
                className="btn mr-2 rounded-full text-sm opacity-80 hover:opacity-100">
                <span
                  className="mr-1.5 rounded bg-blue-500/10 px-1 text-xs leading-tight text-blue-700 dark:text-blue-200">new</span>
                Full-text search
              </a>
              <div>
                <button className="btn mr-2 inline-flex text-sm lg:hidden " type="button">
                  <svg className="mr-1.5 " xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true" focusable="false" role="img" width="1em" height="1em"
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" fill="currentColor">
                    <path
                      d="M18 28h-4a2 2 0 0 1-2-2v-7.59L4.59 11A2 2 0 0 1 4 9.59V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v3.59a2 2 0 0 1-.59 1.41L20 18.41V26a2 2 0 0 1-2 2zM6 6v3.59l8 8V26h4v-8.41l8-8V6z">
                    </path>
                  </svg>
                  Add filters
                </button>
                <div className="relative inline-block">
                  <button className=" btn w-full cursor-pointer text-sm" type="button">
                    <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true" focusable="false" role="img" width="1em" height="1em"
                      preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                      <path d="M27.6 20.6L24 24.2V4h-2v20.2l-3.6-3.6L17 22l6 6l6-6z" fill="currentColor"></path>
                      <path d="M9 4l-6 6l1.4 1.4L8 7.8V28h2V7.8l3.6 3.6L15 10z" fill="currentColor"></path>
                    </svg>
                    Sort: 
                    Trending
                  </button>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
                { datasetList.map((datasetItem, index) => {
                  return <DatasetCard key={index} item={datasetItem} />
                }) }
              </div>
            </div>
            <nav>
              <ul
                className="flex select-none items-center justify-between space-x-2 text-gray-700 sm:justify-center mt-10 mx-auto">
                <li>
                  <a className="flex items-center rounded-lg px-2.5 py-1 hover:bg-gray-50 dark:hover:bg-gray-800 pointer-events-none cursor-default text-gray-400 hover:text-gray-700"
                    href="">
                    <svg className="mr-1.5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true" focusable="false" role="img" width="1em" height="1em"
                      preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                      <path d="M10 16L20 6l1.4 1.4l-8.6 8.6l8.6 8.6L20 26z" fill="currentColor"></path>
                    </svg>
                    Previous
                  </a>
                </li>
                <li className="hidden sm:block">
                  <a className="rounded-lg px-2.5 py-1 bg-gray-50 font-semibold ring-1 ring-inset ring-gray-200 dark:bg-gray-900 dark:text-yellow-500 dark:ring-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800"
                    href="?p=0&amp;sort=trending">1</a>
                </li>
                <li className="hidden sm:block">
                  <a className="rounded-lg px-2.5 py-1  hover:bg-gray-50 dark:hover:bg-gray-800"
                    href="?p=1&amp;sort=trending">2</a>
                </li>
                <li className="hidden sm:block">
                  <a className="rounded-lg px-2.5 py-1  hover:bg-gray-50 dark:hover:bg-gray-800"
                    href="?p=2&amp;sort=trending">3</a>
                </li>
                <li className="hidden sm:block">
                  <a className="rounded-lg px-2.5 py-1  pointer-events-none cursor-default" href="#">...</a>
                </li>
                <li className="hidden sm:block">
                  <a className="rounded-lg px-2.5 py-1  hover:bg-gray-50 dark:hover:bg-gray-800"
                    href="?p=1647&amp;sort=trending">1,648</a>
                </li>
                <li>
                  <a className="flex items-center rounded-lg px-2.5 py-1 hover:bg-gray-50 dark:hover:bg-gray-800 "
                    href="?p=1&amp;sort=trending">
                    Next
                    <svg className="ml-1.5 transform rotate-180" xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" role="img"
                      width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                      <path d="M10 16L20 6l1.4 1.4l-8.6 8.6l8.6 8.6L20 26z" fill="currentColor"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </section>
        </div>
      </div>
    </main>
  )
}
