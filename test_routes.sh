#!/usr/bin/env bash

FARQUEST_API_TOKEN=1fe5ce.afbccea670f467da160c672be0813fc0
TEST_QUEST_ID=clvsukgnk00081374gx9oau55

echo "/quest/types\n"
curl --request GET \
  --url http://localhost:3000/quest/types

echo "/quest/requiredFields/:id\n"
curl --request GET \
  --url http://localhost:3000/quest/requiredFields/$TEST_QUEST_ID

echo "/quest/completions/count/:id" 
curl --request GET \
  --url http://localhost:3000/quest/completions/count/$TEST_QUEST_ID \
  --header 'Farquestapikey: $FARQUEST_API_TOKEN' 

