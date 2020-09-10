export type TOptionClicked = {
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
}

export type TAnswers = {
    answer: string
    answerNumber: number    
    question: string    
    questionNumber: number  
}

export type TUserData = {
    aceleratedStartup: string
    businessModel: string
    businessType: string
    dedication: string
    description: string
    founded: string
    goals: string
    howDiagnosys: string
    sector: string
    whyDiagnosys: string
}

export type TSurveyData = {
    answers: TAnswers[]
    optionClicked: TOptionClicked
}

export type TUserInfo = {
    email: string
    nome: string
    nomeStartup: string
    site: string
    whatsapp: string
}

export type TData = {
    surveyData: TSurveyData
    userData: TUserData
    userInfo: TUserInfo
}
