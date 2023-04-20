
import {privateApi} from "../app/baseApi"
import { OrderDetails } from "../model";
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
        
    }),
    overrideExisting: false
})
export default reportApi;

export const {useGetWeeklyReportQuery} = reportApi