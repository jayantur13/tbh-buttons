import React, { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import LinearProgress from '@mui/material/LinearProgress';
import { DLButtonProps } from 'types';

/**
 * Power-up the download button (over https only)
 *
 * @component
 * @param {string} props.buttonText - Initial text to display on button
 * @param {string} props.fileUrl - A downloadable link to any file
 * @param {string} props.fileName - Filename with an extension (like .mp4 etc)
 * @param {boolean} props.showProgress - Enable/disable linear progress
 * @param {string} props.placeProgress - Place at top/bottom of button
 * @param {string} props.progressText - Place % for progressBar or else text
 * @param {string} props.color - Optional color param, defaults to 'primary'
 * @returns {JSX.Element} - The rendered component.
 */
const DLButton: React.FC<DLButtonProps> = (props: DLButtonProps): JSX.Element => {
  const {
    className,
    style,
    title,
    type,
    name,
    value,
    id,
    buttonText,
    fileName,
    showProgress,
    placeProgress,
    color,
    fileUrl,
  } = props;

  let { progressText } = props;

  const [downloadProgress, setDownloadProgress] = useState<number>(0);
  const [loading, setLoading] = useState(props.loading);

  useEffect(() => {
    setLoading(props.loading);
  }, [props.loading]);

  const downloadFile = async () => {
    const config: AxiosRequestConfig = {
      url: fileUrl,
      method: 'GET',
      responseType: 'blob',
      timeout: 15000,
      onDownloadProgress: progressEvent => {
        if (progressEvent.total !== undefined) {
          if (showProgress === true) {
            setLoading(true);
            const downloadProgress = (progressEvent.loaded / progressEvent.total || 1) * 100;
            setDownloadProgress(downloadProgress); //progress linears
          } else {
            //setLoading(false) here
            const downloadProgress = (progressEvent.loaded / progressEvent.total || 1) * 100;
            setDownloadProgress(downloadProgress);
          }

          //Download complete
          if (progressEvent.progress === 1) {
            setLoading(false);
          }
        }
      },
    };

    try {
      const response: AxiosResponse = await axios(config);
      const blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      setDownloadProgress(0);
    } catch (error) {
      return 'Error downloading file:' + error;
    }
  };

  const getButtonText = () => {
    if (progressText === '%') {
      progressText = `${downloadProgress.toFixed(2)}%`; //Like 0.00 to 100
      return progressText;
    } else {
      //else text like Downloading
      return progressText;
    }
  };

  if (showProgress === true) {
    return (
      <div style={{ display: 'inline-block', position: 'relative' }}>
        {placeProgress === 'top' && loading && (
          <LinearProgress
            data-testid="lp"
            variant="determinate"
            color={color}
            value={downloadProgress}
          />
        )}
        <button
          onClick={() => {
            downloadFile();
          }}
          className={className}
          disabled={loading}
          title={title}
          type={type}
          name={name}
          value={value}
          id={id}
          style={style}
        >
          {loading && downloadProgress !== 0 ? getButtonText() : buttonText}
        </button>
        {placeProgress === 'bottom' && loading && (
          <LinearProgress
            data-testid="lp"
            variant="determinate"
            color={color}
            value={downloadProgress}
          />
        )}
      </div>
    );
  } else {
    return (
      <button
        onClick={() => {
          downloadFile();
        }}
        className={className}
        disabled={loading}
        title={title}
        type={type}
        name={name}
        value={value}
        id={id}
        style={style}
      >
        {downloadProgress !== 0 ? getButtonText() : buttonText}
      </button>
    );
  }
};
export default DLButton;
