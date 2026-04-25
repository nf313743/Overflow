import {FetchResponse, Question} from "../types";
import {fetchClient} from "@/lib/fetchClient";

export async function getQuestions(tag?: string){
    
    let url = '/questions'
    if(tag) url += '?tag=' + tag
    
    const response =  await fetchClient<Question[]>(url, 'GET')

    return response.data!
}

export async function getQuestionById(id: string) {
    const response =  await fetchClient<Question>(`/questions/${id}`, 'GET')
    return response.data!
}

export async function searchQuestions(query: string) {
    return fetchClient<Question[]>(`/search?query=${query}`, 'GET');
}

// export async function getQuestionById(id: string): Promise<FetchResponse<Question>> {
//     const {data: question, error: questionError} =
//         await fetchClient<Question>(`/questions/${id}`, 'GET');
//
//     if (!question || questionError) return {data: null, error: questionError};
//
//     const userIds = new Set<string>();
//     if (question.askerId) userIds.add(question.askerId);
//     for (const a of question.answers ?? []) userIds.add(a.userId);
//
//     if (userIds.size === 0) return {
//         data: null, error: {message: 'Could not get userIds', status: 500}};
//
//     const ids = Array.from(userIds).sort();
//     const profilesUrl = '/profiles/batch?' + new URLSearchParams({ids: ids.join(',')});
//     const { data: profiles, error: profileError } = await fetchClient<Profile[]>(
//         profilesUrl, 'GET', {cache: 'force-cache', next: {revalidate: 3600}}
//     );
//
//     if (profileError) return {data: null, error: profileError};
//
//     const profileMap = new Map(profiles?.map(p => [p.userId, p]));
//
//     const session = await auth();
//     let voteMap = new Map<string, number>();
//
//     if (session) {
//         const voteUrl = `/votes/${id}`;
//         const {data: votes, error: voteError} = await fetchClient<VoteRecord[]>(voteUrl, 'GET');
//
//         if (voteError) return {data: null, error: {message: 'Problem getting votes', status: 500}}
//         voteMap = new Map((votes ?? []).map((v) => [v.targetId, v.voteValue]));
//     }
//
//     const getUserVote = (targetId: string) => voteMap.get(targetId) ?? 0;
//
//     const enriched: Question = {
//         ...question,
//         author: profileMap.get(question.askerId),
//         userVoted: getUserVote(question.id),
//         answers: (question.answers ?? []).map(a => ({
//             ...a,
//             author: profileMap.get(a.userId),
//             userVoted: getUserVote(a.id)
//         }))
//     }
//
//     return {
//         data: enriched
//     }
// }