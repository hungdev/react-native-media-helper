# React Native Instagram login
MediaHelper component for React native, supports both android and ios.
<p align="center">
  <img src="https://github.com/hungdev/react-native-media-helper/blob/master/MediaHelper.gif?raw=true" width=300/>
</p>

currently, react native camera roll is not supported get thumbnail video from camera roll. So this module support gets thumbnail video and photo. it depends on `react-native-thumbnail` and `react-native-get-real-path` library to complete android module

# Install

```js
npm install react-native-media-picker --save
```
then link

[react-native-thumbnail](https://github.com/phuochau/react-native-thumbnail#mostly-automatic-installation)

[react-native-get-real-path](https://github.com/Wraptime/react-native-get-real-path#installation-android)


# Usage:

```javascript
import MediaHelper from 'react-native-media-helper'

  <MediaHelper
    numPhotos={20}
    numVideos={20}
    onCancel={() => this.setState({visible: false})}
    onSelectedItem={(item) => alert(JSON.stringify(item))}
  />

```


# Response example:

`Ios`
```
{
  "node": {
    "timestamp": 1509173491,
    "location": {},
    "group_name": "Camera Roll",
    "type": "ALAssetTypePhoto",
    "image": {
      "width": 640,
      "height": 640,
      "isStored": true,
      "filename": "cat.jpg",
      "uri": "assets-library://asset/asset.JPG?id=BD2F9143-CAD6-476A-8875-DF91AF6401A5&ext=JPG",
      "playableDuration": 0,
      "thumbnailUrl": "assets-library://asset/asset.JPG?id=BD2F9143-CAD6-476A-8875-DF91AF6401A5&ext=JPG"
    }
  }
}
```

`Android`
```
{
  "node": {
    "timestamp": 1523171768,
    "group_name": "thumb",
    "type": "image/jpeg",
    "image": {
      "height": 320,
      "width": 240,
      "uri": "content://media/external/images/media/2222",
      "thumbnailUrl": "content://media/external/images/media/2222"
    }
  }
}
```

# Props

Property          | Type             | default          | Description
------------      | -------------    | -------------    | -------------
numPhotos         | PropTypes.number | 10               | `just for Android` number of Photo
numVideos         | PropTypes.number | 10               | `just for Android` number of Video
getPhotos         | PropTypes.bool   | true             | `just for Android` allow get photo
getVideos         | PropTypes.bool   | true             | `just for Android` allow get video
media             | PropTypes.string | All              | `just for Ios` String: `All`, `Photos`, `Videos`
num               | PropTypes.number | 20               | `just for Ios` number item
imageMargin       | PropTypes.number | 5                | Margin size of one image. 
imagesPerRow      | PropTypes.number | 3                | Number of images per row. 
headerMid         | PropTypes.string | 'Select Items'   | text header mid
headerLeftButton  | PropTypes.string | 'Cancel'         | text header left button
headerRightButton | PropTypes.string | 'Done'           | text header right button
onCancel          | PropTypes.func   | () => {}         | function cancel
onSelectedItem    | PropTypes.func   | () => {}         | function selected item

