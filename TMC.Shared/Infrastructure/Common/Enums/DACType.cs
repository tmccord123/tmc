namespace TMC.Shared
{
    /// <summary>
    /// The DAC Types
    /// </summary>
    public enum DACType
    {
        /// <summary>
        /// Undefined DAC Type (Default)
        /// </summary>
        Undefined = 0,

        /// <summary>
        /// User DAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.UserDAC")]
        User = 1,

        /// <summary>
        /// File DAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.FileDAC")]
        File = 2,

        /// <summary>
        /// Organization DAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.OrganizationDAC")]
        Organization = 3,

        /// <summary>
        /// Module DAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.ModuleDAC")]
        Module = 4,

        /// Individual DAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.IndividualDAC")]
        Individual = 5,

        /// <summary>
        /// EmailTemplate
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.EmailTemplateDAC")]
        EmailTemplate = 6,

        /// <summary>
        /// EmailInfo
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.EmailInfoDAC")]
        EmailInfo = 7,

        /// <summary>
        /// EmailDispatch
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.EmailDispatchDAC")]
        EmailDispatch = 8,

        /// <summary>
        /// Organization Location DAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.OrganizationLocationDAC")]
        OrganizationLocation = 9,

        /// <summary>
        /// Organization Contact DAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.OrganizationContactDAC")]
        OrganizationContact = 10,

        /// <summary>
        /// Feature DAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.FeatureDAC")]
        Feature = 11,

        /// <summary>
        /// Feature DAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.FeatureActionDAC")]
        FeatureAction = 12,

        /// <summary>
        /// Feature DAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.ActionDAC")]
        Action = 13,

        /// <summary>
        /// Feature DAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.FeatureActionBaseDAC")]
        FeatureActionBase = 14,

        /// <summary>
        /// Feature DAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.RoleDAC")]
        Role = 15,

        /// <summary>
        /// User settings DAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.UserSettingDAC")]
        UserSetting = 16,

        /// <summary>
        /// Organization Location DAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.NextIdDAC")]
        NextId = 17,

        /// <summary>
        /// RoleFeatureActionDAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.RoleFeatureActionDAC")]
        RoleFeatureAction = 18,

        /// <summary>
        /// Role User DAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.RoleUserDAC")]
        RoleUser = 19,

        /// <summary>
        /// The user client DAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.JCCUserClientDAC")]
        UserClient = 20,

        /// <summary>
        /// The Training Plan DAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.TrainingPlanDAC")]
        TrainingPlan = 21,

        /// <summary>
        /// The POB Training Employee Information DAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.POBTrainingEmpInfoDAC")]
        POBTrainingEmpInfo = 22,

        /// <summary>
        /// The POB Training Job Title DAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.POBTrainingJobTitleDAC")]
        POBTrainingJobTitle = 23,

        /// <summary>
        /// The Affiliation DAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.AffiliationDAC")]
        Affiliation = 24,

        /// <summary>
        /// The POB Training Certificate DAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.POBTrainingCertificateDAC")]
        POBTrainingCertificate = 25,

        /// <summary>
        /// The SSO DAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.SSODAC")]
        SSO = 26,

        /// <summary>
        /// The affiliation subscription request DAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.AffiliationSubscriptionRequestDAC")]
        AffiliationSubscriptionRequest = 27,

        /// <summary>
        /// The Subscription Requests DAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.CompanySubscriptionDAC")]
        CompanySubscription = 28,

        /// <summary>
        /// The new company verification
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.NewCompanyVerificationDAC")]
        NewCompanyVerification = 29,

        /// <summary>
        /// The Merge POB Records
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.MergePOBRecordsDAC")]
        MergePOBRecords = 30,

 /// <summary>
        /// The Training Reports DAC
        /// </summary>
        [QualifiedTypeName("TMC.Data.dll", "TMC.Data.TrainingReportsDAC")]
        TrainingReports = 31
    }
}