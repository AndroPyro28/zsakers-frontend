
import {privateApi} from "../baseApi"
import { ModelForYearly, OrderDetails } from "../../model";
const reportApi = privateApi.injectEndpoints({
    endpoints: builder => ({
        getWeeklyReport: builder.query<any, void >({
            query: body => ({
                url: `report/weekly`,
                method:"GET",
                body
            }),
            providesTags: ['REPORT']
        }),
        getYearlyReport: builder.query<ModelForYearly[], void >({
            query: body => ({
                url: `report/yearly`,
                method:"GET",
                body
            }),
            providesTags: ['REPORT']
        }),
        
    }),
    overrideExisting: false
})
export default reportApi;

export const {useGetWeeklyReportQuery, useGetYearlyReportQuery} = reportApi