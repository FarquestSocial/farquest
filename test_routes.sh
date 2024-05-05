#!/usr/bin/env bash

FARQUEST_API_TOKEN=1fe5ce.afbccea670f467da160c672be0813fc0
CORRELATION_ID=clvtbecn7000011yy3y4rqab3

curl --request GET \
  --url http://localhost:3000/quest/types


# array of quest ids
QUEST_IDS=("clvsukgnk00081374gx9oau55")

printf "/quest/types\n"
curl --request GET \
  --url http://localhost:3000/quest/types

printf "\n\n\n"
for i in "${QUEST_IDS[@]}"
do

  printf "/quest/requiredFields/:id\n"
  curl --request GET \
    --url http://localhost:3000/quest/requiredFields/$i
  printf "\n"
  printf "/quest/complete/:id\n"
  curl --request POST \
    --url https://api.farquest.social/quest/complete \
    --header 'Content-Type: application/json' \
    --header "Farquestapikey: ${FARQUEST_API_TOKEN}" \
    --data '{
    "questId": "$i",
    "correlationId": "${CORRELATION_ID}"
  }'
done

