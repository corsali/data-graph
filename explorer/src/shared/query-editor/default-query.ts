export const defaultQuery = `# Example of Queryable Data

query AvailableData {
  users {
    # From Knowhere, the Google location data dao
    google {
      locationHistory {
        latitude
        longitude
        timestamp
      }
    }
    # From Unwrapped, the Spotify data dao
    spotify {
      history {
        title
        artist
        listenedOn
      }
    }
    # From vChars, the Telegram data dao
    telegram {
      messages {
        messageText
        isOutgoing
        timestamp
      }
    }
  }
}
`;

/* 
Old query 

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
      yourTopics { 
        yourTopics 
        yourReelsTopics
        yourReelsSentiments
      }
      informationAboutYou {
        accountBasedIn {
          inferredDataPrimaryLocation
        }
        adsInterests
      }
      adsAndBusinesses {
        advertisersUsingYourActivityOrInformation {
          name
          basedOnUploadedList
          basedOnYourInteractions
        }
      }
      adsAndTopics {
        adsViewed {
          viewedOn
          author
        }
        postsViewed {
          viewedOn
          author
        }
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
*/

// rest of facebook data 

// facebookMarketplace {
//   buyerAndSellerRatings {
//     date
//     title
//     offerText
//   }
//   itemsSold {
//     title
//     description
//     price
//     seller
//     category
//     marketplace
//     createdOn
//     updatedOn
//     location {
//       latitude
//       longitude
//     }
//   }
// }
// yourTopics {
//   yourTopics
// }
// dating {
//   yourDatingActivity {
//     recentlyActiveDateRange {
//       start
//       end
//     }
//     complimentsSent
//     likedCount
//     passedCount
//     smiledCount
//   }
//   yourDatingProfile {
//     additionalLocations
//     college
//     children
//     currentCity
//     company
//     gender
//     profileQuestions
//     gradSchool
//     highSchool
//     hobbies
//     hometown
//     height
//     jobTitle
//     religiousViews
//     photos {
//       uri
//       createdAt
//       metadata {
//         cameraMake
//         cameraModel
//         takenAt
//         uploadIp
//       }
//     }
//     profilePicture {
//       uri
//       createdAt
//       metadata {
//         cameraMake
//         cameraModel
//         takenAt
//         uploadIp
//       }
//     }
//   }
//   yourDatingPreferences {
//     minAge
//     maxAge
//     children
//     distance
//     gender
//     religiousViews
//   }
// }
// location {
//   timezone
//   primaryPublicLocation {
//     city
//     region
//     country
//   }
//   lastLocation {
//     time
//     coordinate {
//       latitude
//       longitude
//     }
//   }
//   deviceLocation {
//     spn
//     countryCode
//   }
// }
// adsInformation {
//   advertsInteractedWith {
//     date
//     action
//     title
//   }
// }
// appsAndWebsitesOffOfFacebook {
//   appsAndWebsites {
//     name
//     dateAdded
//     userAppScopedId
//     category
//     dateRemoved
//   }
//   offFacebookActivity {
//     name
//     events {
//       id
//       type
//       date
//     }
//   }
// }
// facebookNews {
//   locations
// }
// otherLoggedInformation {
//   friendPeerGroup
//   adsInterests
// }

// rest of google fields

// googlePlayStore {
//   installs {
//     firstInstallationTime
//     lastUpdateTime
//     doc {
//       documentType
//       title
//     }
//     device {
//       model
//       carrier
//       manufacturer
//       deviceDisplayName
//     }
//   }
//   library {
//     acquisitionTime
//     doc {
//       documentType
//       title
//     }
//   }
//   purchaseHistory {
//     invoicePrice
//     paymentMethodTitle
//     userLanguageCode
//     userCountry
//     purchaseTime
//     doc {
//       documentType
//       title
//     }
//   }
//   reviews {
//     creationTime
//     starRating
//     comment
//     document {
//       documentType
//       title
//     }
//   }
//   devices {
//     deviceRegistrationTime
//     userAddedOnDeviceTime
//     lastTimeDeviceActive
//     mostRecentData {
//       carrierName
//       manufacturer
//       modelName
//       deviceName
//       productName
//       retailBrand
//       nativePlatform
//       deviceIpCountry
//       userLocale
//       androidSdkVersion
//       playStoreClientVersion
//       buildFingerprint
//       totalMemoryBytes
//     }
//     dataAtTimeOfUserPlayActivity {
//       carrierName
//       manufacturer
//       modelName
//       deviceName
//       productName
//       retailBrand
//       nativePlatform
//       deviceIpCountry
//       userLocale
//       androidSdkVersion
//       playStoreClientVersion
//       buildFingerprint
//       totalMemoryBytes
//     }
//   }
//   subscriptions {
//     period {
//       unit
//       count
//     }
//     price
//     doc {
//       documentType
//       title
//     }
//     renewalDate
//     pricing {
//       period {
//         unit
//         count
//       }
//       price
//       repeatedPricing
//     }
//     state
//   }
// }
// youtubeAndYoutubeMusic {
//   watchHistory {
//     ... on YoutubeWatched {
//       service
//       date
//       watched
//       url
//       channelUrl
//     }
//     ... on YoutubeMusicVisit {
//       service
//       date
//       action
//     }
//   }
//   searchHistory {
//     ... on YoutubeRegularSearch {
//       url
//       queriedAt
//       service
//       searchedFor
//     }
//     ... on YoutubeImplicitSearch {
//       url
//       queriedAt
//       service
//       watched
//       details
//     }
//   }
//   subscriptions {
//     channelId
//     channelUrl
//     channelTitle
//   }
//   playlists {
//     playlistId
//     channelId
//     title
//     description
//     visibility
//     createdAt
//     updatedAt
//   }
// }
// maps {
//   starredPlaces {
//     mapsUrl
//     latitude
//     longitude
//     publishedAt
//     updatedAt
//     title
//   }
// }
