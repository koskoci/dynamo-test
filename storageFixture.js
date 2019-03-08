const botContext = {
  userId: '123456789',
  conversationId: 'conversation:987654321',
  address: {
    id: '1551434501878',
    channelId: 'msteams',
    user: {
      id: '123456789',
      name: 'Morris Jackson',
      aadObjectId: 'sample-id',
    },
    conversation: {
      conversationType: 'personal',
      id: 'conversation:987654321',
    },
    bot: {
      id: '28:b66df7cc-1234-4d51-5678-e56e7b72965e',
      name: 'mst-m',
    },
    serviceUrl: 'https://smba.trafficmanager.net/amer/',
  },
  persistUserData: true,
  persistConversationData: true,
};

const value = {
  userData: {
    address: {
      id: '1551434501878',
      channelId: 'msteams',
      user: {
        id: '123456789',
        name: 'Morris Jackson',
        aadObjectId: 'sample-id',
      },
      conversation: {
        conversationType: 'personal',
        id: 'conversation:987654321',
      },
      bot: {
        id: '28:b66df7cc-1234-4d51-5678-e56e7b72965e',
        name: 'mst-m',
      },
      serviceUrl: 'https://smba.trafficmanager.net/amer/',
    },
  },
  conversationData: {},
  privateConversationData: {
    'BotBuilder.Data.SessionState': {
      callstack: [
        {
          id: '*:/',
          state: {
            'BotBuilder.Data.WaterfallStep': 0,
          },
        },
      ],
      lastAccess: 1551434502581,
      version: 0,
    },
  },
};

const redisReply = {
  userData: {
    address: {
      id: '1551434501878',
      channelId: 'msteams',
      user: {
        id: '123456789',
        name: 'Morris Jackson',
        aadObjectId: 'sample-id',
      },
      conversation: {
        conversationType: 'personal',
        id: 'conversation:987654321',
      },
      bot: {
        id: '28:b66df7cc-1234-4d51-5678-e56e7b72965e',
        name: 'mst-m',
      },
      serviceUrl: 'https://smba.trafficmanager.net/amer/',
    },
  },
  conversationData: {},
  privateConversationData: {
    'BotBuilder.Data.SessionState': {
      callstack: [
        {
          id: '*:/',
          state: {
            'BotBuilder.Data.WaterfallStep': 0,
          },
        },
      ],
      lastAccess: 1551434502581,
      version: 0,
    },
  },
};

module.exports = { botContext, value, redisReply };
