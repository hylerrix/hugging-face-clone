import {
  AudioClassificationSVG,
  AudiotoAudioSVG,
  AutomaticSpeechRecognitionSVG,
  ConversationalSVG,
  DepthEstimationSVG,
  FeatureExtractionSVG,
  FillMaskSVG,
  GraphMachineLearningSVG,
  ImageClassificationSVG,
  ImageSegmentationSVG,
  ImageToImageSVG,
  ImageToTextSVG,
  MultipleChoiceSVG,
  ObjectDetectionSVG,
  QuestionAnsweringSVG,
  SentenceSimilaritySVG,
  SummarizationSVG,
  TableQuestionAnsweringSVG,
  TableToTextSVG,
  TabularClassificationSVG,
  TabularRegressionSVG,
  TabularToTextSVG,
  Text2TextGenerationSVG,
  TextClassificationSVG,
  TextGenerationSVG,
  TextRetrievalSVG,
  TextToImageSVG,
  TextToSpeechSVG,
  TextToVideoSVG,
  TimeSeriesForecastingSVG,
  TokenClassificationSVG,
  TranslationSVG,
  UnconditionalImageGenerationSVG,
  VideoClassificationSVG,
  VisualQuestionAnsweringSVG,
  VoiceActivityDetectionSVG,
  ZeroShotClassificationSVG,
  ZeroShotImageClassificationSVG,
} from 'ui/svgs/tasks'

export default function TabTasks() {
  return (
    <div className="mb-20 lg:mb-4">
      <div className="mb-4 flex items-center justify-between lg:mr-8">
        <div className="relative flex min-w-0 flex-1 items-center">
          <svg
            className="absolute text-gray-300 pointer-events-none left-2 text-sm"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            focusable="false"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <path
              d="M30 28.59L22.45 21A11 11 0 1 0 21 22.45L28.59 30zM5 14a9 9 0 1 1 9 9a9 9 0 0 1-9-9z"
              fill="currentColor"
            ></path>
          </svg>
          <input
            className="h-7 min-w-0 flex-1 rounded-full border border-gray-200/70 bg-white pl-7 text-sm placeholder-gray-400 ring-0 focus:outline-none"
            autoComplete="off"
            placeholder="Filter Tasks by name"
            type="text"
            value=""
            readOnly
          />
        </div>
      </div>
      <div className="mb-3">
        <div className="mb-3 text-sm font-medium text-gray-500">Multimodal</div>
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
          <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Avisual-question-answering">
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
        <div className="mb-3 text-sm font-medium text-gray-500">Computer Vision</div>
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
          <a
            className="tag  tag-white"
            href="/datasets?task_categories=task_categories%3Aunconditional-image-generation"
          >
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
          <a
            className="tag  tag-white"
            href="/datasets?task_categories=task_categories%3Azero-shot-image-classification"
          >
            <div className="tag-ico tag-ico-yellow">
              <ZeroShotImageClassificationSVG />
            </div>
            <span>Zero-Shot Image Classification</span>
          </a>
        </div>
      </div>
      <div className="mb-3">
        <div className="mb-3 text-sm font-medium text-gray-500">Natural Language Processing</div>
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
        <div className="mb-3 text-sm font-medium text-gray-500">Audio</div>
        <div className="flex flex-wrap">
          <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Atext-to-speech">
            <div className="tag-ico tag-ico-yellow">
              <TextToSpeechSVG />
            </div>
            <span>Text-to-Speech</span>
          </a>
          <a className="tag  tag-white" href="/datasets?task_categories=task_categories%3Aautomatic-speech-recognition">
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
        <div className="mb-3 text-sm font-medium text-gray-500">Tabular</div>
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
  )
}
