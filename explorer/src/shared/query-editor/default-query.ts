export const defaultQuery = `# Currently Supported Queryable Data

query AvailableData {
  users {
    id
    firstName
    lastName
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