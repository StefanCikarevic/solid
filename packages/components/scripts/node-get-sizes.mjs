import fs from 'fs';
import { gzipSync } from 'zlib';

let packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

const getReadableSize = sizeInByte => Math.round(sizeInByte / 1024);

const currentRealSize = packageJson.meta.bundleSizeInKb.uncompressed;
const currentGzipSize = packageJson.meta.bundleSizeInKb.gzip;

const newRealSize = getReadableSize(fs.statSync('./dist/components/umd/solid-components.js').size);
const newGzipSize = getReadableSize(gzipSync(fs.readFileSync('./dist/components/umd/solid-components.js')).byteLength);

const getOutput = (newSize, currentSize) => {
  const sizeDiffKB = newSize - currentSize;
  const sizeDiffPercent = Math.round((newSize / currentSize) * 100 - 100);

  if (sizeDiffKB === 0) {
    return `${newSize} KB (unchanged)`;
  } else if (sizeDiffKB > 0) {
    return `${newSize} KB (+${sizeDiffKB} KB / +${sizeDiffPercent}%)`;
  } else {
    return `${newSize} KB (${sizeDiffKB} KB / ${sizeDiffPercent}%)`;
  }
};

export const getOutputs = () => {
  return {
    uncompressed: `Bundle size (uncompressed): ${getOutput(newRealSize, currentRealSize)}`,
    gzip: `Bundle size (gzipped): ${getOutput(newGzipSize, currentGzipSize)}`
  };
};

export const getSizes = () => {
  return {
    uncompressed: newRealSize,
    gzip: newGzipSize
  };
};
