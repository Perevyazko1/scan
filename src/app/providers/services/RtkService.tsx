import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {Token} from "../StoreProvider/models/Token";
import {Patch} from "../StoreProvider/models/Patch";


export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl:"https://gateway.scan-interfax.ru/api/v1",
        timeout: 2000
    }),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        loginApi: build.mutation<Token, Token>({
            query: ({ login, password }) => ({
                url:`/account/login`,
                method: 'POST',
                body: { login, password },
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }),
            invalidatesTags: ['Post']
        }),
        companyCount: build.query({
            query:(arg)=>({
                url: `/account/info` ,
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }

        }),
            providesTags: result => ["Post"]
        }),
        objectSearch: build.mutation<Patch, Patch>({
            query: ({patch}) =>({
                url:`${patch}`,
                method: 'POST',
                body:{

              "issueDateInterval": {
                "startDate": "2019-01-01T00:00:00+03:00",
                "endDate": "2022-08-31T23:59:59+03:00"
              },
              "searchContext": {
                "targetSearchEntitiesContext": {
                  "targetSearchEntities": [
                    {
                      "type": "company",
                      "sparkId": null,
                      "entityId": null,
                      "inn": 7710137066,
                      "maxFullness": true,
                      "inBusinessNews": null
                    }
                  ],
                  "onlyMainRole": true,
                  "tonality": "any",
                  "onlyWithRiskFactors": false,
                  "riskFactors": {
                    "and": [],
                    "or": [],
                    "not": []
                  },
                  "themes": {
                    "and": [],
                    "or": [],
                    "not": []
                  }
                },
                "themesFilter": {
                  "and": [],
                  "or": [],
                  "not": []
                }
              },
              "searchArea": {
                "includedSources": [],
                "excludedSources": [],
                "includedSourceGroups": [],
                "excludedSourceGroups": []
              },
              "attributeFilters": {
                "excludeTechNews": true,
                "excludeAnnouncements": true,
                "excludeDigests": true
              },
              "similarMode": "duplicates",
              "limit": 1000,
              "sortType": "sourceInfluence",
              "sortDirectionType": "desc",
              "intervalType": "month",
              "histogramTypes": [
                "totalDocuments",
                "riskFactors"
              ]

                },
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`

                }
            }),
            invalidatesTags: ['Post']
        }),
        documents: build.mutation({
            query: ({}) => ({
                url:"/documents",
                method: "POST",
                body:{
                    "ids": [ "1:0JPQqdGM0JNWCdCzf2Jt0LHQotGV0ZUh0ZbRlBXCt0Je0JHQruKAnDcUXkZQ0YvQscKnehLRnNC1KtGK0Ll9BWLigLo/HXXCrhw="]
                },
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }),
            invalidatesTags: ['Post']
        })
})
})