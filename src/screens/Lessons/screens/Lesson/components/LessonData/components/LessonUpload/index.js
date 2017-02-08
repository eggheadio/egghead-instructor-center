import React, {Component} from 'react'
import ReactS3Uploader from 'react-s3-uploader'

const descriptionByUploadStatus = {
  preprocessing: 'Preparing...',
  progressing: 'Uploading...',
  error: 'Error!',
  finished: 'Your video has been uploaded.',
}

export default class LessonUpload extends Component {

  state = {
    uploadStatus: false,
  }

  handleUploadPreprocess = () => {
    this.setState({uploadStatus: 'preprocessing'})
  }

  handleUploadProgress = () => {
    this.setState({uploadStatus: 'progressing'})
  }

  handleUploadError = () => {
    this.setState({uploadStatus: 'error'})
  }

  handleUploadFinish = () => {
    this.setState({uploadStatus: 'finished'})
  }

  render() {

    const {uploadStatus} = this.state

    return (
      <div>

        <ReactS3Uploader
          signingUrl='/s3/sign'
          signingUrlMethod='GET'
          accept='image/*'
          signingUrlHeaders={{additional: 'headers'}}
          signingUrlQueryParams={{additional: 'query-params'}}
          signingUrlWithCredentials={true}
          uploadRequestHeaders={{'x-amz-acl': 'public-read'}}
          contentDisposition='auto'
          scrubFilename={(filename) => filename.replace(/[^\w\d_\-\.]+/ig, '')}
          server='http://cross-origin-server.com'
          preprocess={this.handleUploadPreprocess}
          onProgress={this.handleUploadProgress}
          onError={this.handleUploadError}
          onFinish={this.handleUploadFinish}
        />

        <div>
          {descriptionByUploadStatus[uploadStatus]}
        </div>

      </div>
    )
  }
}
