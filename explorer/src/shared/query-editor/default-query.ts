export const defaultQuery = `# Currently Supported Queryable Data

query AvailableData {
  users {
    facebook {
      friendsAndFollowers {
        name
        addedOn
      }
      pages {
        name
        likedOn
      }
      posts {
        title
        post
        postedOn
        attachments {
          title
          description
          createdOn
          source
          metadata {
            ... on FacebookRecordingMetadata {
              recordedAt
            }
            ... on FacebookPhotoMetadata {
              cameraMake
              cameraModel
              takenAt
            }
          }
        }
      }
    }
    instagram {
      followersAndFollowing {
        name
        followingSince
        url
      }
    }
    google {
      search {
        type
        url
        title
        timestamp
      }
      locationHistory {
        latitude
        longitude
        timestamp
      }
    }
    netflix {
      history {
        title
        cover
        watchedOn
      }
    }
  }
}
`;

// Not working due to deploy issue, to be copied back to instagram
// yourTopics { 
//   yourTopics 
//   yourReelsTopics
//   yourReelsSentiments
// }
// informationAboutYou {
//   accountBasedIn {
//     inferredDataPrimaryLocation
//   }
// }
// adsAndBusinesses {
//   advertisersUsingYourActivityOrInformation {
//     name
//     basedOnUploadedList
//     basedOnYourInteractions
//   }
// }
// adsAndTopics {
//   adsViewed {
//     viewedOn
//     author
//   }
//   postsViewed {
//     viewedOn
//     author
//   }
// }