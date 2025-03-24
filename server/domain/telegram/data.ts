/* eslint-disable */
// @ts-nocheck
import { DbTelegram } from "./types";

export const mockTelegramData: DbTelegram[] = [
  {
    "userId": "0x3dE50685C2a3F1d4833B8CEd55e62Dba3c47BB6a",
    "messages": [
      {
        "messageText": "I'm thinking about visiting San Francisco next month. Any recommendations?",
        "timestamp": new Date("2024-09-18T15:32:19.428Z"),
        "isOutgoing": true
      },
      {
        "messageText": "Stop by hayes valley and ride a bike through golden gate park!",
        "timestamp": new Date("2024-09-18T15:35:42.156Z"),
        "isOutgoing": false
      },
      {
        "messageText": "Don't forget to call gma tomorrow for her birthday",
        "timestamp": new Date("2024-09-19T21:14:38.721Z"),
        "isOutgoing": false
      },
      {
        "messageText": "Cool! So I'm pretty flexible other than needing to fly out that Friday",
        "timestamp": new Date("2024-09-21T10:24:36.152Z"),
        "isOutgoing": true
      }
    ]
  },
  {
    "userId": "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    "messages": [
      {
        "messageText": "I'll be working from home today, internet issues at the office",
        "timestamp": new Date("2024-09-20T08:21:54.362Z"),
        "isOutgoing": true
      },
      {
        "messageText": "Running 10 minutes late, sorry!",
        "timestamp": new Date("2024-09-21T13:52:17.905Z"),
        "isOutgoing": true
      },
      {
        "messageText": "No problem, we just got here",
        "timestamp": new Date("2024-09-21T13:53:05.124Z"),
        "isOutgoing": false
      },
      {
        "messageText": "Have you seen that hilarious morning routine video",
        "timestamp": new Date("2025-03-22T09:02:41.358Z"),
        "isOutgoing": false
      },
      {
        "messageText": "Yes have started rubbing banana peel on my face now",
        "timestamp": new Date("2025-03-22T09:08:14.587Z"),
        "isOutgoing": true
      }
    ]
  },
  {
    "userId": "0x8C5fecdC472E27Bc447696F431E425D924a95dAa",
    "messages": [
      {
        "messageText": "Here's the photo from our hike yesterday",
        "timestamp": new Date("2022-05-19T22:12:34.876Z"),
        "isOutgoing": true,
        "hasAttachment": true
      },
      {
        "messageText": "I vote for that new sci-fi one on Netflix",
        "timestamp": new Date("2023-12-10T17:45:21.432Z"),
        "isOutgoing": true
      }
    ]
  },
  {
    "userId": "0x487F1D4eB9ccF6487a26E25192a213A8b6aF0590",
    "messages": [
      {
        "messageText": "Ah good idea will let you know",
        "timestamp": new Date("2025-03-21T07:40:12.523Z"),
        "isOutgoing": true
      },
      {
        "messageText": "Invite sent for 3pm today, chat then!",
        "timestamp": new Date("2025-03-21T07:57:46.000Z"),
        "isOutgoing": false
      },
      {
        "messageText": "On my way",
        "timestamp": new Date("2025-03-21T14:50:23.612Z"),
        "isOutgoing": true
      },
      {
        "messageText": "Just running a few mins late",
        "timestamp": new Date("2025-03-21T15:04:31.000Z"),
        "isOutgoing": false
      },
      {
        "messageText": "Just wrapping up",
        "timestamp": new Date("2025-03-21T15:57:18.349Z"),
        "isOutgoing": true
      },
      {
        "messageText": "Perfect will do",
        "timestamp": new Date("2025-03-21T16:02:41.782Z"),
        "isOutgoing": true
      },
      {
        "messageText": "Will chat on that tomorrow",
        "timestamp": new Date("2025-03-21T16:05:03.215Z"),
        "isOutgoing": true
      }
    ]
  }
];

// Add a type definition for the Telegram data structure
// This would typically be in your types.ts file
export interface DbTelegram {
  userId: string;
  messages: TelegramMessage[];
}

export interface TelegramMessage {
  messageText: string;
  timestamp: Date;
  isOutgoing: boolean;
  hasAttachment?: boolean;
}