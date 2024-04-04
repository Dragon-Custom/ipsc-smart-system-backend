import { enumType, inputObjectType, objectType } from 'nexus'

export const TransactionIsolationLevel = enumType({
  name: 'TransactionIsolationLevel',
  members: [
    'ReadUncommitted',
    'ReadCommitted',
    'RepeatableRead',
    'Serializable',
  ],
})

export const ShooterScalarFieldEnum = enumType({
  name: 'ShooterScalarFieldEnum',
  members: ['id', 'createAt', 'name', 'division', 'email'],
})

export const StageScalarFieldEnum = enumType({
  name: 'StageScalarFieldEnum',
  members: [
    'id',
    'createAt',
    'name',
    'description',
    'papers',
    'poppers',
    'noshoots',
    'gunCondition',
    'shooterId',
    'walkthroughTime',
  ],
})

export const ScoreboardScalarFieldEnum = enumType({
  name: 'ScoreboardScalarFieldEnum',
  members: ['id', 'createAt', 'lastUpdate', 'name'],
})

export const ScorelistScalarFieldEnum = enumType({
  name: 'ScorelistScalarFieldEnum',
  members: ['id', 'createAt', 'lastUpdate', 'scoreboardId', 'stageId'],
})

export const ScoreScalarFieldEnum = enumType({
  name: 'ScoreScalarFieldEnum',
  members: [
    'id',
    'alphas',
    'charlies',
    'deltas',
    'misses',
    'noshoots',
    'poppers',
    'time',
    'scorelistId',
    'shooterId',
    'round',
  ],
})

export const ProErrorObjectsScalarFieldEnum = enumType({
  name: 'ProErrorObjectsScalarFieldEnum',
  members: ['id', 'index', 'title', 'description'],
})

export const ProErrorsStoreScalarFieldEnum = enumType({
  name: 'ProErrorsStoreScalarFieldEnum',
  members: ['id', 'count', 'scoreId', 'proErrorObjectsId'],
})

export const SortOrder = enumType({
  name: 'SortOrder',
  members: ['asc', 'desc'],
})

export const QueryMode = enumType({
  name: 'QueryMode',
  members: ['default', 'insensitive'],
})

export const NullsOrder = enumType({
  name: 'NullsOrder',
  members: ['first', 'last'],
})

export const Division = enumType({
  name: 'Division',
  members: ['Standard', 'Open', 'Production', 'ProductionOptics'],
})

export const ShooterWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ShooterWhereInput' })
    t.list.field('OR', { type: 'ShooterWhereInput' })
    t.list.field('NOT', { type: 'ShooterWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('createAt', { type: 'DateTimeNullableFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('division', { type: 'EnumDivisionFilter' })
    t.field('email', { type: 'StringFilter' })
    t.field('stage', { type: 'StageListRelationFilter' })
    t.field('score', { type: 'ScoreListRelationFilter' })
  },
})

export const ShooterOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createAt', { type: 'SortOrderInput' })
    t.field('name', { type: 'SortOrder' })
    t.field('division', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('stage', { type: 'StageOrderByRelationAggregateInput' })
    t.field('score', { type: 'ScoreOrderByRelationAggregateInput' })
  },
})

export const ShooterWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.list.field('AND', { type: 'ShooterWhereInput' })
    t.list.field('OR', { type: 'ShooterWhereInput' })
    t.list.field('NOT', { type: 'ShooterWhereInput' })
    t.field('createAt', { type: 'DateTimeNullableFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('division', { type: 'EnumDivisionFilter' })
    t.field('email', { type: 'StringFilter' })
    t.field('stage', { type: 'StageListRelationFilter' })
    t.field('score', { type: 'ScoreListRelationFilter' })
  },
})

export const ShooterOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createAt', { type: 'SortOrderInput' })
    t.field('name', { type: 'SortOrder' })
    t.field('division', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
    t.field('_count', { type: 'ShooterCountOrderByAggregateInput' })
    t.field('_avg', { type: 'ShooterAvgOrderByAggregateInput' })
    t.field('_max', { type: 'ShooterMaxOrderByAggregateInput' })
    t.field('_min', { type: 'ShooterMinOrderByAggregateInput' })
    t.field('_sum', { type: 'ShooterSumOrderByAggregateInput' })
  },
})

export const ShooterScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'ShooterScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'ShooterScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'ShooterScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('createAt', { type: 'DateTimeNullableWithAggregatesFilter' })
    t.field('name', { type: 'StringWithAggregatesFilter' })
    t.field('division', { type: 'EnumDivisionWithAggregatesFilter' })
    t.field('email', { type: 'StringWithAggregatesFilter' })
  },
})

export const StageWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'StageWhereInput' })
    t.list.field('OR', { type: 'StageWhereInput' })
    t.list.field('NOT', { type: 'StageWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('createAt', { type: 'DateTimeNullableFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('description', { type: 'StringNullableFilter' })
    t.field('papers', { type: 'IntFilter' })
    t.field('poppers', { type: 'IntFilter' })
    t.field('noshoots', { type: 'IntFilter' })
    t.field('gunCondition', { type: 'IntFilter' })
    t.field('shooterId', { type: 'IntFilter' })
    t.field('walkthroughTime', { type: 'DecimalFilter' })
    t.field('designer', { type: 'ShooterRelationFilter' })
    t.field('Scorelist', { type: 'ScorelistListRelationFilter' })
  },
})

export const StageOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createAt', { type: 'SortOrderInput' })
    t.field('name', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrderInput' })
    t.field('papers', { type: 'SortOrder' })
    t.field('poppers', { type: 'SortOrder' })
    t.field('noshoots', { type: 'SortOrder' })
    t.field('gunCondition', { type: 'SortOrder' })
    t.field('shooterId', { type: 'SortOrder' })
    t.field('walkthroughTime', { type: 'SortOrder' })
    t.field('designer', { type: 'ShooterOrderByWithRelationInput' })
    t.field('Scorelist', { type: 'ScorelistOrderByRelationAggregateInput' })
  },
})

export const StageWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.list.field('AND', { type: 'StageWhereInput' })
    t.list.field('OR', { type: 'StageWhereInput' })
    t.list.field('NOT', { type: 'StageWhereInput' })
    t.field('createAt', { type: 'DateTimeNullableFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('description', { type: 'StringNullableFilter' })
    t.field('papers', { type: 'IntFilter' })
    t.field('poppers', { type: 'IntFilter' })
    t.field('noshoots', { type: 'IntFilter' })
    t.field('gunCondition', { type: 'IntFilter' })
    t.field('shooterId', { type: 'IntFilter' })
    t.field('walkthroughTime', { type: 'DecimalFilter' })
    t.field('designer', { type: 'ShooterRelationFilter' })
    t.field('Scorelist', { type: 'ScorelistListRelationFilter' })
  },
})

export const StageOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createAt', { type: 'SortOrderInput' })
    t.field('name', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrderInput' })
    t.field('papers', { type: 'SortOrder' })
    t.field('poppers', { type: 'SortOrder' })
    t.field('noshoots', { type: 'SortOrder' })
    t.field('gunCondition', { type: 'SortOrder' })
    t.field('shooterId', { type: 'SortOrder' })
    t.field('walkthroughTime', { type: 'SortOrder' })
    t.field('_count', { type: 'StageCountOrderByAggregateInput' })
    t.field('_avg', { type: 'StageAvgOrderByAggregateInput' })
    t.field('_max', { type: 'StageMaxOrderByAggregateInput' })
    t.field('_min', { type: 'StageMinOrderByAggregateInput' })
    t.field('_sum', { type: 'StageSumOrderByAggregateInput' })
  },
})

export const StageScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'StageScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'StageScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'StageScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('createAt', { type: 'DateTimeNullableWithAggregatesFilter' })
    t.field('name', { type: 'StringWithAggregatesFilter' })
    t.field('description', { type: 'StringNullableWithAggregatesFilter' })
    t.field('papers', { type: 'IntWithAggregatesFilter' })
    t.field('poppers', { type: 'IntWithAggregatesFilter' })
    t.field('noshoots', { type: 'IntWithAggregatesFilter' })
    t.field('gunCondition', { type: 'IntWithAggregatesFilter' })
    t.field('shooterId', { type: 'IntWithAggregatesFilter' })
    t.field('walkthroughTime', { type: 'DecimalWithAggregatesFilter' })
  },
})

export const ScoreboardWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ScoreboardWhereInput' })
    t.list.field('OR', { type: 'ScoreboardWhereInput' })
    t.list.field('NOT', { type: 'ScoreboardWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('createAt', { type: 'DateTimeFilter' })
    t.field('lastUpdate', { type: 'DateTimeFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('scorelists', { type: 'ScorelistListRelationFilter' })
  },
})

export const ScoreboardOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createAt', { type: 'SortOrder' })
    t.field('lastUpdate', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('scorelists', { type: 'ScorelistOrderByRelationAggregateInput' })
  },
})

export const ScoreboardWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.list.field('AND', { type: 'ScoreboardWhereInput' })
    t.list.field('OR', { type: 'ScoreboardWhereInput' })
    t.list.field('NOT', { type: 'ScoreboardWhereInput' })
    t.field('createAt', { type: 'DateTimeFilter' })
    t.field('lastUpdate', { type: 'DateTimeFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('scorelists', { type: 'ScorelistListRelationFilter' })
  },
})

export const ScoreboardOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createAt', { type: 'SortOrder' })
    t.field('lastUpdate', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('_count', { type: 'ScoreboardCountOrderByAggregateInput' })
    t.field('_avg', { type: 'ScoreboardAvgOrderByAggregateInput' })
    t.field('_max', { type: 'ScoreboardMaxOrderByAggregateInput' })
    t.field('_min', { type: 'ScoreboardMinOrderByAggregateInput' })
    t.field('_sum', { type: 'ScoreboardSumOrderByAggregateInput' })
  },
})

export const ScoreboardScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'ScoreboardScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'ScoreboardScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'ScoreboardScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('createAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('lastUpdate', { type: 'DateTimeWithAggregatesFilter' })
    t.field('name', { type: 'StringWithAggregatesFilter' })
  },
})

export const ScorelistWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ScorelistWhereInput' })
    t.list.field('OR', { type: 'ScorelistWhereInput' })
    t.list.field('NOT', { type: 'ScorelistWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('createAt', { type: 'DateTimeFilter' })
    t.field('lastUpdate', { type: 'DateTimeFilter' })
    t.field('scoreboardId', { type: 'IntNullableFilter' })
    t.field('stageId', { type: 'IntNullableFilter' })
    t.field('stage', { type: 'StageNullableRelationFilter' })
    t.field('scores', { type: 'ScoreListRelationFilter' })
    t.field('scoreboard', { type: 'ScoreboardNullableRelationFilter' })
  },
})

export const ScorelistOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createAt', { type: 'SortOrder' })
    t.field('lastUpdate', { type: 'SortOrder' })
    t.field('scoreboardId', { type: 'SortOrderInput' })
    t.field('stageId', { type: 'SortOrderInput' })
    t.field('stage', { type: 'StageOrderByWithRelationInput' })
    t.field('scores', { type: 'ScoreOrderByRelationAggregateInput' })
    t.field('scoreboard', { type: 'ScoreboardOrderByWithRelationInput' })
  },
})

export const ScorelistWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.list.field('AND', { type: 'ScorelistWhereInput' })
    t.list.field('OR', { type: 'ScorelistWhereInput' })
    t.list.field('NOT', { type: 'ScorelistWhereInput' })
    t.field('createAt', { type: 'DateTimeFilter' })
    t.field('lastUpdate', { type: 'DateTimeFilter' })
    t.field('scoreboardId', { type: 'IntNullableFilter' })
    t.field('stageId', { type: 'IntNullableFilter' })
    t.field('stage', { type: 'StageNullableRelationFilter' })
    t.field('scores', { type: 'ScoreListRelationFilter' })
    t.field('scoreboard', { type: 'ScoreboardNullableRelationFilter' })
  },
})

export const ScorelistOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createAt', { type: 'SortOrder' })
    t.field('lastUpdate', { type: 'SortOrder' })
    t.field('scoreboardId', { type: 'SortOrderInput' })
    t.field('stageId', { type: 'SortOrderInput' })
    t.field('_count', { type: 'ScorelistCountOrderByAggregateInput' })
    t.field('_avg', { type: 'ScorelistAvgOrderByAggregateInput' })
    t.field('_max', { type: 'ScorelistMaxOrderByAggregateInput' })
    t.field('_min', { type: 'ScorelistMinOrderByAggregateInput' })
    t.field('_sum', { type: 'ScorelistSumOrderByAggregateInput' })
  },
})

export const ScorelistScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'ScorelistScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'ScorelistScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'ScorelistScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'StringWithAggregatesFilter' })
    t.field('createAt', { type: 'DateTimeWithAggregatesFilter' })
    t.field('lastUpdate', { type: 'DateTimeWithAggregatesFilter' })
    t.field('scoreboardId', { type: 'IntNullableWithAggregatesFilter' })
    t.field('stageId', { type: 'IntNullableWithAggregatesFilter' })
  },
})

export const ScoreWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ScoreWhereInput' })
    t.list.field('OR', { type: 'ScoreWhereInput' })
    t.list.field('NOT', { type: 'ScoreWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('alphas', { type: 'IntFilter' })
    t.field('charlies', { type: 'IntFilter' })
    t.field('deltas', { type: 'IntFilter' })
    t.field('misses', { type: 'IntFilter' })
    t.field('noshoots', { type: 'IntFilter' })
    t.field('poppers', { type: 'IntNullableFilter' })
    t.field('time', { type: 'FloatFilter' })
    t.field('scorelistId', { type: 'StringNullableFilter' })
    t.field('shooterId', { type: 'IntFilter' })
    t.field('round', { type: 'IntFilter' })
    t.field('shooter', { type: 'ShooterRelationFilter' })
    t.field('proErrors', { type: 'ProErrorsStoreListRelationFilter' })
    t.field('scorelist', { type: 'ScorelistNullableRelationFilter' })
  },
})

export const ScoreOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('alphas', { type: 'SortOrder' })
    t.field('charlies', { type: 'SortOrder' })
    t.field('deltas', { type: 'SortOrder' })
    t.field('misses', { type: 'SortOrder' })
    t.field('noshoots', { type: 'SortOrder' })
    t.field('poppers', { type: 'SortOrderInput' })
    t.field('time', { type: 'SortOrder' })
    t.field('scorelistId', { type: 'SortOrderInput' })
    t.field('shooterId', { type: 'SortOrder' })
    t.field('round', { type: 'SortOrder' })
    t.field('shooter', { type: 'ShooterOrderByWithRelationInput' })
    t.field('proErrors', {
      type: 'ProErrorsStoreOrderByRelationAggregateInput',
    })
    t.field('scorelist', { type: 'ScorelistOrderByWithRelationInput' })
  },
})

export const ScoreWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.list.field('AND', { type: 'ScoreWhereInput' })
    t.list.field('OR', { type: 'ScoreWhereInput' })
    t.list.field('NOT', { type: 'ScoreWhereInput' })
    t.field('alphas', { type: 'IntFilter' })
    t.field('charlies', { type: 'IntFilter' })
    t.field('deltas', { type: 'IntFilter' })
    t.field('misses', { type: 'IntFilter' })
    t.field('noshoots', { type: 'IntFilter' })
    t.field('poppers', { type: 'IntNullableFilter' })
    t.field('time', { type: 'FloatFilter' })
    t.field('scorelistId', { type: 'StringNullableFilter' })
    t.field('shooterId', { type: 'IntFilter' })
    t.field('round', { type: 'IntFilter' })
    t.field('shooter', { type: 'ShooterRelationFilter' })
    t.field('proErrors', { type: 'ProErrorsStoreListRelationFilter' })
    t.field('scorelist', { type: 'ScorelistNullableRelationFilter' })
  },
})

export const ScoreOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('alphas', { type: 'SortOrder' })
    t.field('charlies', { type: 'SortOrder' })
    t.field('deltas', { type: 'SortOrder' })
    t.field('misses', { type: 'SortOrder' })
    t.field('noshoots', { type: 'SortOrder' })
    t.field('poppers', { type: 'SortOrderInput' })
    t.field('time', { type: 'SortOrder' })
    t.field('scorelistId', { type: 'SortOrderInput' })
    t.field('shooterId', { type: 'SortOrder' })
    t.field('round', { type: 'SortOrder' })
    t.field('_count', { type: 'ScoreCountOrderByAggregateInput' })
    t.field('_avg', { type: 'ScoreAvgOrderByAggregateInput' })
    t.field('_max', { type: 'ScoreMaxOrderByAggregateInput' })
    t.field('_min', { type: 'ScoreMinOrderByAggregateInput' })
    t.field('_sum', { type: 'ScoreSumOrderByAggregateInput' })
  },
})

export const ScoreScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', { type: 'ScoreScalarWhereWithAggregatesInput' })
    t.list.field('OR', { type: 'ScoreScalarWhereWithAggregatesInput' })
    t.list.field('NOT', { type: 'ScoreScalarWhereWithAggregatesInput' })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('alphas', { type: 'IntWithAggregatesFilter' })
    t.field('charlies', { type: 'IntWithAggregatesFilter' })
    t.field('deltas', { type: 'IntWithAggregatesFilter' })
    t.field('misses', { type: 'IntWithAggregatesFilter' })
    t.field('noshoots', { type: 'IntWithAggregatesFilter' })
    t.field('poppers', { type: 'IntNullableWithAggregatesFilter' })
    t.field('time', { type: 'FloatWithAggregatesFilter' })
    t.field('scorelistId', { type: 'StringNullableWithAggregatesFilter' })
    t.field('shooterId', { type: 'IntWithAggregatesFilter' })
    t.field('round', { type: 'IntWithAggregatesFilter' })
  },
})

export const ProErrorObjectsWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorObjectsWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ProErrorObjectsWhereInput' })
    t.list.field('OR', { type: 'ProErrorObjectsWhereInput' })
    t.list.field('NOT', { type: 'ProErrorObjectsWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('index', { type: 'StringFilter' })
    t.field('title', { type: 'StringFilter' })
    t.field('description', { type: 'StringFilter' })
    t.field('proErrorsStore', { type: 'ProErrorsStoreListRelationFilter' })
  },
})

export const ProErrorObjectsOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorObjectsOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('index', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('proErrorsStore', {
      type: 'ProErrorsStoreOrderByRelationAggregateInput',
    })
  },
})

export const ProErrorObjectsWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorObjectsWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('index', { type: 'String' })
    t.list.field('AND', { type: 'ProErrorObjectsWhereInput' })
    t.list.field('OR', { type: 'ProErrorObjectsWhereInput' })
    t.list.field('NOT', { type: 'ProErrorObjectsWhereInput' })
    t.field('title', { type: 'StringFilter' })
    t.field('description', { type: 'StringFilter' })
    t.field('proErrorsStore', { type: 'ProErrorsStoreListRelationFilter' })
  },
})

export const ProErrorObjectsOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorObjectsOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('index', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('_count', { type: 'ProErrorObjectsCountOrderByAggregateInput' })
    t.field('_avg', { type: 'ProErrorObjectsAvgOrderByAggregateInput' })
    t.field('_max', { type: 'ProErrorObjectsMaxOrderByAggregateInput' })
    t.field('_min', { type: 'ProErrorObjectsMinOrderByAggregateInput' })
    t.field('_sum', { type: 'ProErrorObjectsSumOrderByAggregateInput' })
  },
})

export const ProErrorObjectsScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorObjectsScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', {
      type: 'ProErrorObjectsScalarWhereWithAggregatesInput',
    })
    t.list.field('OR', {
      type: 'ProErrorObjectsScalarWhereWithAggregatesInput',
    })
    t.list.field('NOT', {
      type: 'ProErrorObjectsScalarWhereWithAggregatesInput',
    })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('index', { type: 'StringWithAggregatesFilter' })
    t.field('title', { type: 'StringWithAggregatesFilter' })
    t.field('description', { type: 'StringWithAggregatesFilter' })
  },
})

export const ProErrorsStoreWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ProErrorsStoreWhereInput' })
    t.list.field('OR', { type: 'ProErrorsStoreWhereInput' })
    t.list.field('NOT', { type: 'ProErrorsStoreWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('count', { type: 'IntFilter' })
    t.field('scoreId', { type: 'IntNullableFilter' })
    t.field('proErrorObjectsId', { type: 'IntFilter' })
    t.field('proError', { type: 'ProErrorObjectsRelationFilter' })
    t.field('score', { type: 'ScoreNullableRelationFilter' })
  },
})

export const ProErrorsStoreOrderByWithRelationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreOrderByWithRelationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('count', { type: 'SortOrder' })
    t.field('scoreId', { type: 'SortOrderInput' })
    t.field('proErrorObjectsId', { type: 'SortOrder' })
    t.field('proError', { type: 'ProErrorObjectsOrderByWithRelationInput' })
    t.field('score', { type: 'ScoreOrderByWithRelationInput' })
  },
})

export const ProErrorsStoreWhereUniqueInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreWhereUniqueInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.list.field('AND', { type: 'ProErrorsStoreWhereInput' })
    t.list.field('OR', { type: 'ProErrorsStoreWhereInput' })
    t.list.field('NOT', { type: 'ProErrorsStoreWhereInput' })
    t.field('count', { type: 'IntFilter' })
    t.field('scoreId', { type: 'IntNullableFilter' })
    t.field('proErrorObjectsId', { type: 'IntFilter' })
    t.field('proError', { type: 'ProErrorObjectsRelationFilter' })
    t.field('score', { type: 'ScoreNullableRelationFilter' })
  },
})

export const ProErrorsStoreOrderByWithAggregationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreOrderByWithAggregationInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('count', { type: 'SortOrder' })
    t.field('scoreId', { type: 'SortOrderInput' })
    t.field('proErrorObjectsId', { type: 'SortOrder' })
    t.field('_count', { type: 'ProErrorsStoreCountOrderByAggregateInput' })
    t.field('_avg', { type: 'ProErrorsStoreAvgOrderByAggregateInput' })
    t.field('_max', { type: 'ProErrorsStoreMaxOrderByAggregateInput' })
    t.field('_min', { type: 'ProErrorsStoreMinOrderByAggregateInput' })
    t.field('_sum', { type: 'ProErrorsStoreSumOrderByAggregateInput' })
  },
})

export const ProErrorsStoreScalarWhereWithAggregatesInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreScalarWhereWithAggregatesInput',
  definition(t) {
    t.list.field('AND', {
      type: 'ProErrorsStoreScalarWhereWithAggregatesInput',
    })
    t.list.field('OR', { type: 'ProErrorsStoreScalarWhereWithAggregatesInput' })
    t.list.field('NOT', {
      type: 'ProErrorsStoreScalarWhereWithAggregatesInput',
    })
    t.field('id', { type: 'IntWithAggregatesFilter' })
    t.field('count', { type: 'IntWithAggregatesFilter' })
    t.field('scoreId', { type: 'IntNullableWithAggregatesFilter' })
    t.field('proErrorObjectsId', { type: 'IntWithAggregatesFilter' })
  },
})

export const ShooterCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterCreateInput',
  definition(t) {
    t.field('createAt', { type: 'DateTime' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('division', { type: 'Division' })
    t.nonNull.field('email', { type: 'String' })
    t.field('stage', { type: 'StageCreateNestedManyWithoutDesignerInput' })
    t.field('score', { type: 'ScoreCreateNestedManyWithoutShooterInput' })
  },
})

export const ShooterUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createAt', { type: 'DateTime' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('division', { type: 'Division' })
    t.nonNull.field('email', { type: 'String' })
    t.field('stage', {
      type: 'StageUncheckedCreateNestedManyWithoutDesignerInput',
    })
    t.field('score', {
      type: 'ScoreUncheckedCreateNestedManyWithoutShooterInput',
    })
  },
})

export const ShooterUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterUpdateInput',
  definition(t) {
    t.field('createAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('division', { type: 'EnumDivisionFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('stage', { type: 'StageUpdateManyWithoutDesignerNestedInput' })
    t.field('score', { type: 'ScoreUpdateManyWithoutShooterNestedInput' })
  },
})

export const ShooterUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('division', { type: 'EnumDivisionFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('stage', {
      type: 'StageUncheckedUpdateManyWithoutDesignerNestedInput',
    })
    t.field('score', {
      type: 'ScoreUncheckedUpdateManyWithoutShooterNestedInput',
    })
  },
})

export const ShooterCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createAt', { type: 'DateTime' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('division', { type: 'Division' })
    t.nonNull.field('email', { type: 'String' })
  },
})

export const ShooterUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterUpdateManyMutationInput',
  definition(t) {
    t.field('createAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('division', { type: 'EnumDivisionFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const ShooterUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('division', { type: 'EnumDivisionFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const StageCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageCreateInput',
  definition(t) {
    t.field('createAt', { type: 'DateTime' })
    t.nonNull.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.nonNull.field('papers', { type: 'Int' })
    t.nonNull.field('poppers', { type: 'Int' })
    t.nonNull.field('noshoots', { type: 'Int' })
    t.nonNull.field('gunCondition', { type: 'Int' })
    t.nonNull.field('walkthroughTime', { type: 'Decimal' })
    t.nonNull.field('designer', {
      type: 'ShooterCreateNestedOneWithoutStageInput',
    })
    t.field('Scorelist', { type: 'ScorelistCreateNestedManyWithoutStageInput' })
  },
})

export const StageUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createAt', { type: 'DateTime' })
    t.nonNull.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.nonNull.field('papers', { type: 'Int' })
    t.nonNull.field('poppers', { type: 'Int' })
    t.nonNull.field('noshoots', { type: 'Int' })
    t.nonNull.field('gunCondition', { type: 'Int' })
    t.nonNull.field('shooterId', { type: 'Int' })
    t.nonNull.field('walkthroughTime', { type: 'Decimal' })
    t.field('Scorelist', {
      type: 'ScorelistUncheckedCreateNestedManyWithoutStageInput',
    })
  },
})

export const StageUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageUpdateInput',
  definition(t) {
    t.field('createAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('papers', { type: 'IntFieldUpdateOperationsInput' })
    t.field('poppers', { type: 'IntFieldUpdateOperationsInput' })
    t.field('noshoots', { type: 'IntFieldUpdateOperationsInput' })
    t.field('gunCondition', { type: 'IntFieldUpdateOperationsInput' })
    t.field('walkthroughTime', { type: 'DecimalFieldUpdateOperationsInput' })
    t.field('designer', {
      type: 'ShooterUpdateOneRequiredWithoutStageNestedInput',
    })
    t.field('Scorelist', { type: 'ScorelistUpdateManyWithoutStageNestedInput' })
  },
})

export const StageUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('papers', { type: 'IntFieldUpdateOperationsInput' })
    t.field('poppers', { type: 'IntFieldUpdateOperationsInput' })
    t.field('noshoots', { type: 'IntFieldUpdateOperationsInput' })
    t.field('gunCondition', { type: 'IntFieldUpdateOperationsInput' })
    t.field('shooterId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('walkthroughTime', { type: 'DecimalFieldUpdateOperationsInput' })
    t.field('Scorelist', {
      type: 'ScorelistUncheckedUpdateManyWithoutStageNestedInput',
    })
  },
})

export const StageCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createAt', { type: 'DateTime' })
    t.nonNull.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.nonNull.field('papers', { type: 'Int' })
    t.nonNull.field('poppers', { type: 'Int' })
    t.nonNull.field('noshoots', { type: 'Int' })
    t.nonNull.field('gunCondition', { type: 'Int' })
    t.nonNull.field('shooterId', { type: 'Int' })
    t.nonNull.field('walkthroughTime', { type: 'Decimal' })
  },
})

export const StageUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageUpdateManyMutationInput',
  definition(t) {
    t.field('createAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('papers', { type: 'IntFieldUpdateOperationsInput' })
    t.field('poppers', { type: 'IntFieldUpdateOperationsInput' })
    t.field('noshoots', { type: 'IntFieldUpdateOperationsInput' })
    t.field('gunCondition', { type: 'IntFieldUpdateOperationsInput' })
    t.field('walkthroughTime', { type: 'DecimalFieldUpdateOperationsInput' })
  },
})

export const StageUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('papers', { type: 'IntFieldUpdateOperationsInput' })
    t.field('poppers', { type: 'IntFieldUpdateOperationsInput' })
    t.field('noshoots', { type: 'IntFieldUpdateOperationsInput' })
    t.field('gunCondition', { type: 'IntFieldUpdateOperationsInput' })
    t.field('shooterId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('walkthroughTime', { type: 'DecimalFieldUpdateOperationsInput' })
  },
})

export const ScoreboardCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardCreateInput',
  definition(t) {
    t.field('createAt', { type: 'DateTime' })
    t.field('lastUpdate', { type: 'DateTime' })
    t.nonNull.field('name', { type: 'String' })
    t.field('scorelists', {
      type: 'ScorelistCreateNestedManyWithoutScoreboardInput',
    })
  },
})

export const ScoreboardUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createAt', { type: 'DateTime' })
    t.field('lastUpdate', { type: 'DateTime' })
    t.nonNull.field('name', { type: 'String' })
    t.field('scorelists', {
      type: 'ScorelistUncheckedCreateNestedManyWithoutScoreboardInput',
    })
  },
})

export const ScoreboardUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardUpdateInput',
  definition(t) {
    t.field('createAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('lastUpdate', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('scorelists', {
      type: 'ScorelistUpdateManyWithoutScoreboardNestedInput',
    })
  },
})

export const ScoreboardUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('lastUpdate', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('scorelists', {
      type: 'ScorelistUncheckedUpdateManyWithoutScoreboardNestedInput',
    })
  },
})

export const ScoreboardCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardCreateManyInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createAt', { type: 'DateTime' })
    t.field('lastUpdate', { type: 'DateTime' })
    t.nonNull.field('name', { type: 'String' })
  },
})

export const ScoreboardUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardUpdateManyMutationInput',
  definition(t) {
    t.field('createAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('lastUpdate', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const ScoreboardUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('lastUpdate', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const ScorelistCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createAt', { type: 'DateTime' })
    t.field('lastUpdate', { type: 'DateTime' })
    t.field('stage', { type: 'StageCreateNestedOneWithoutScorelistInput' })
    t.field('scores', { type: 'ScoreCreateNestedManyWithoutScorelistInput' })
    t.field('scoreboard', {
      type: 'ScoreboardCreateNestedOneWithoutScorelistsInput',
    })
  },
})

export const ScorelistUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistUncheckedCreateInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createAt', { type: 'DateTime' })
    t.field('lastUpdate', { type: 'DateTime' })
    t.field('scoreboardId', { type: 'Int' })
    t.field('stageId', { type: 'Int' })
    t.field('scores', {
      type: 'ScoreUncheckedCreateNestedManyWithoutScorelistInput',
    })
  },
})

export const ScorelistUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('lastUpdate', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('stage', { type: 'StageUpdateOneWithoutScorelistNestedInput' })
    t.field('scores', { type: 'ScoreUpdateManyWithoutScorelistNestedInput' })
    t.field('scoreboard', {
      type: 'ScoreboardUpdateOneWithoutScorelistsNestedInput',
    })
  },
})

export const ScorelistUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('lastUpdate', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('scoreboardId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('stageId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('scores', {
      type: 'ScoreUncheckedUpdateManyWithoutScorelistNestedInput',
    })
  },
})

export const ScorelistCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistCreateManyInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createAt', { type: 'DateTime' })
    t.field('lastUpdate', { type: 'DateTime' })
    t.field('scoreboardId', { type: 'Int' })
    t.field('stageId', { type: 'Int' })
  },
})

export const ScorelistUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('lastUpdate', { type: 'DateTimeFieldUpdateOperationsInput' })
  },
})

export const ScorelistUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('lastUpdate', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('scoreboardId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('stageId', { type: 'NullableIntFieldUpdateOperationsInput' })
  },
})

export const ScoreCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreCreateInput',
  definition(t) {
    t.nonNull.field('id', { type: 'Int' })
    t.nonNull.field('alphas', { type: 'Int' })
    t.nonNull.field('charlies', { type: 'Int' })
    t.nonNull.field('deltas', { type: 'Int' })
    t.nonNull.field('misses', { type: 'Int' })
    t.nonNull.field('noshoots', { type: 'Int' })
    t.field('poppers', { type: 'Int' })
    t.nonNull.field('time', { type: 'Float' })
    t.nonNull.field('round', { type: 'Int' })
    t.nonNull.field('shooter', {
      type: 'ShooterCreateNestedOneWithoutScoreInput',
    })
    t.field('proErrors', {
      type: 'ProErrorsStoreCreateNestedManyWithoutScoreInput',
    })
    t.field('scorelist', { type: 'ScorelistCreateNestedOneWithoutScoresInput' })
  },
})

export const ScoreUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUncheckedCreateInput',
  definition(t) {
    t.nonNull.field('id', { type: 'Int' })
    t.nonNull.field('alphas', { type: 'Int' })
    t.nonNull.field('charlies', { type: 'Int' })
    t.nonNull.field('deltas', { type: 'Int' })
    t.nonNull.field('misses', { type: 'Int' })
    t.nonNull.field('noshoots', { type: 'Int' })
    t.field('poppers', { type: 'Int' })
    t.nonNull.field('time', { type: 'Float' })
    t.field('scorelistId', { type: 'String' })
    t.nonNull.field('shooterId', { type: 'Int' })
    t.nonNull.field('round', { type: 'Int' })
    t.field('proErrors', {
      type: 'ProErrorsStoreUncheckedCreateNestedManyWithoutScoreInput',
    })
  },
})

export const ScoreUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('alphas', { type: 'IntFieldUpdateOperationsInput' })
    t.field('charlies', { type: 'IntFieldUpdateOperationsInput' })
    t.field('deltas', { type: 'IntFieldUpdateOperationsInput' })
    t.field('misses', { type: 'IntFieldUpdateOperationsInput' })
    t.field('noshoots', { type: 'IntFieldUpdateOperationsInput' })
    t.field('poppers', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('time', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('round', { type: 'IntFieldUpdateOperationsInput' })
    t.field('shooter', {
      type: 'ShooterUpdateOneRequiredWithoutScoreNestedInput',
    })
    t.field('proErrors', {
      type: 'ProErrorsStoreUpdateManyWithoutScoreNestedInput',
    })
    t.field('scorelist', { type: 'ScorelistUpdateOneWithoutScoresNestedInput' })
  },
})

export const ScoreUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('alphas', { type: 'IntFieldUpdateOperationsInput' })
    t.field('charlies', { type: 'IntFieldUpdateOperationsInput' })
    t.field('deltas', { type: 'IntFieldUpdateOperationsInput' })
    t.field('misses', { type: 'IntFieldUpdateOperationsInput' })
    t.field('noshoots', { type: 'IntFieldUpdateOperationsInput' })
    t.field('poppers', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('time', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('scorelistId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('shooterId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('round', { type: 'IntFieldUpdateOperationsInput' })
    t.field('proErrors', {
      type: 'ProErrorsStoreUncheckedUpdateManyWithoutScoreNestedInput',
    })
  },
})

export const ScoreCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreCreateManyInput',
  definition(t) {
    t.nonNull.field('id', { type: 'Int' })
    t.nonNull.field('alphas', { type: 'Int' })
    t.nonNull.field('charlies', { type: 'Int' })
    t.nonNull.field('deltas', { type: 'Int' })
    t.nonNull.field('misses', { type: 'Int' })
    t.nonNull.field('noshoots', { type: 'Int' })
    t.field('poppers', { type: 'Int' })
    t.nonNull.field('time', { type: 'Float' })
    t.field('scorelistId', { type: 'String' })
    t.nonNull.field('shooterId', { type: 'Int' })
    t.nonNull.field('round', { type: 'Int' })
  },
})

export const ScoreUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('alphas', { type: 'IntFieldUpdateOperationsInput' })
    t.field('charlies', { type: 'IntFieldUpdateOperationsInput' })
    t.field('deltas', { type: 'IntFieldUpdateOperationsInput' })
    t.field('misses', { type: 'IntFieldUpdateOperationsInput' })
    t.field('noshoots', { type: 'IntFieldUpdateOperationsInput' })
    t.field('poppers', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('time', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('round', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const ScoreUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('alphas', { type: 'IntFieldUpdateOperationsInput' })
    t.field('charlies', { type: 'IntFieldUpdateOperationsInput' })
    t.field('deltas', { type: 'IntFieldUpdateOperationsInput' })
    t.field('misses', { type: 'IntFieldUpdateOperationsInput' })
    t.field('noshoots', { type: 'IntFieldUpdateOperationsInput' })
    t.field('poppers', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('time', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('scorelistId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('shooterId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('round', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const ProErrorObjectsCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorObjectsCreateInput',
  definition(t) {
    t.nonNull.field('id', { type: 'Int' })
    t.nonNull.field('index', { type: 'String' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.field('proErrorsStore', {
      type: 'ProErrorsStoreCreateNestedManyWithoutProErrorInput',
    })
  },
})

export const ProErrorObjectsUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorObjectsUncheckedCreateInput',
  definition(t) {
    t.nonNull.field('id', { type: 'Int' })
    t.nonNull.field('index', { type: 'String' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
    t.field('proErrorsStore', {
      type: 'ProErrorsStoreUncheckedCreateNestedManyWithoutProErrorInput',
    })
  },
})

export const ProErrorObjectsUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorObjectsUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('index', { type: 'StringFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('proErrorsStore', {
      type: 'ProErrorsStoreUpdateManyWithoutProErrorNestedInput',
    })
  },
})

export const ProErrorObjectsUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorObjectsUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('index', { type: 'StringFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    t.field('proErrorsStore', {
      type: 'ProErrorsStoreUncheckedUpdateManyWithoutProErrorNestedInput',
    })
  },
})

export const ProErrorObjectsCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorObjectsCreateManyInput',
  definition(t) {
    t.nonNull.field('id', { type: 'Int' })
    t.nonNull.field('index', { type: 'String' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
  },
})

export const ProErrorObjectsUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorObjectsUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('index', { type: 'StringFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const ProErrorObjectsUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorObjectsUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('index', { type: 'StringFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const ProErrorsStoreCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreCreateInput',
  definition(t) {
    t.nonNull.field('id', { type: 'Int' })
    t.nonNull.field('count', { type: 'Int' })
    t.nonNull.field('proError', {
      type: 'ProErrorObjectsCreateNestedOneWithoutProErrorsStoreInput',
    })
    t.field('score', { type: 'ScoreCreateNestedOneWithoutProErrorsInput' })
  },
})

export const ProErrorsStoreUncheckedCreateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreUncheckedCreateInput',
  definition(t) {
    t.nonNull.field('id', { type: 'Int' })
    t.nonNull.field('count', { type: 'Int' })
    t.field('scoreId', { type: 'Int' })
    t.nonNull.field('proErrorObjectsId', { type: 'Int' })
  },
})

export const ProErrorsStoreUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('count', { type: 'IntFieldUpdateOperationsInput' })
    t.field('proError', {
      type: 'ProErrorObjectsUpdateOneRequiredWithoutProErrorsStoreNestedInput',
    })
    t.field('score', { type: 'ScoreUpdateOneWithoutProErrorsNestedInput' })
  },
})

export const ProErrorsStoreUncheckedUpdateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreUncheckedUpdateInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('count', { type: 'IntFieldUpdateOperationsInput' })
    t.field('scoreId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('proErrorObjectsId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const ProErrorsStoreCreateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreCreateManyInput',
  definition(t) {
    t.nonNull.field('id', { type: 'Int' })
    t.nonNull.field('count', { type: 'Int' })
    t.field('scoreId', { type: 'Int' })
    t.nonNull.field('proErrorObjectsId', { type: 'Int' })
  },
})

export const ProErrorsStoreUpdateManyMutationInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreUpdateManyMutationInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('count', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const ProErrorsStoreUncheckedUpdateManyInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreUncheckedUpdateManyInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('count', { type: 'IntFieldUpdateOperationsInput' })
    t.field('scoreId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('proErrorObjectsId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const IntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntFilter' })
  },
})

export const DateTimeNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeNullableFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeNullableFilter' })
  },
})

export const StringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringFilter' })
  },
})

export const EnumDivisionFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumDivisionFilter',
  definition(t) {
    t.field('equals', { type: 'Division' })
    t.list.field('in', { type: 'Division' })
    t.list.field('notIn', { type: 'Division' })
    t.field('not', { type: 'NestedEnumDivisionFilter' })
  },
})

export const StageListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageListRelationFilter',
  definition(t) {
    t.field('every', { type: 'StageWhereInput' })
    t.field('some', { type: 'StageWhereInput' })
    t.field('none', { type: 'StageWhereInput' })
  },
})

export const ScoreListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreListRelationFilter',
  definition(t) {
    t.field('every', { type: 'ScoreWhereInput' })
    t.field('some', { type: 'ScoreWhereInput' })
    t.field('none', { type: 'ScoreWhereInput' })
  },
})

export const SortOrderInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'SortOrderInput',
  definition(t) {
    t.nonNull.field('sort', { type: 'SortOrder' })
    t.field('nulls', { type: 'NullsOrder' })
  },
})

export const StageOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const ScoreOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const ShooterCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createAt', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('division', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
  },
})

export const ShooterAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const ShooterMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createAt', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('division', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
  },
})

export const ShooterMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createAt', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('division', { type: 'SortOrder' })
    t.field('email', { type: 'SortOrder' })
  },
})

export const ShooterSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const IntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedIntFilter' })
    t.field('_max', { type: 'NestedIntFilter' })
  },
})

export const DateTimeNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedDateTimeNullableFilter' })
    t.field('_max', { type: 'NestedDateTimeNullableFilter' })
  },
})

export const StringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedStringFilter' })
    t.field('_max', { type: 'NestedStringFilter' })
  },
})

export const EnumDivisionWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumDivisionWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Division' })
    t.list.field('in', { type: 'Division' })
    t.list.field('notIn', { type: 'Division' })
    t.field('not', { type: 'NestedEnumDivisionWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedEnumDivisionFilter' })
    t.field('_max', { type: 'NestedEnumDivisionFilter' })
  },
})

export const StringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringNullableFilter' })
  },
})

export const DecimalFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DecimalFilter',
  definition(t) {
    t.field('equals', { type: 'Decimal' })
    t.list.field('in', { type: 'Decimal' })
    t.list.field('notIn', { type: 'Decimal' })
    t.field('lt', { type: 'Decimal' })
    t.field('lte', { type: 'Decimal' })
    t.field('gt', { type: 'Decimal' })
    t.field('gte', { type: 'Decimal' })
    t.field('not', { type: 'NestedDecimalFilter' })
  },
})

export const ShooterRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterRelationFilter',
  definition(t) {
    t.field('is', { type: 'ShooterWhereInput' })
    t.field('isNot', { type: 'ShooterWhereInput' })
  },
})

export const ScorelistListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistListRelationFilter',
  definition(t) {
    t.field('every', { type: 'ScorelistWhereInput' })
    t.field('some', { type: 'ScorelistWhereInput' })
    t.field('none', { type: 'ScorelistWhereInput' })
  },
})

export const ScorelistOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const StageCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createAt', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('papers', { type: 'SortOrder' })
    t.field('poppers', { type: 'SortOrder' })
    t.field('noshoots', { type: 'SortOrder' })
    t.field('gunCondition', { type: 'SortOrder' })
    t.field('shooterId', { type: 'SortOrder' })
    t.field('walkthroughTime', { type: 'SortOrder' })
  },
})

export const StageAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('papers', { type: 'SortOrder' })
    t.field('poppers', { type: 'SortOrder' })
    t.field('noshoots', { type: 'SortOrder' })
    t.field('gunCondition', { type: 'SortOrder' })
    t.field('shooterId', { type: 'SortOrder' })
    t.field('walkthroughTime', { type: 'SortOrder' })
  },
})

export const StageMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createAt', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('papers', { type: 'SortOrder' })
    t.field('poppers', { type: 'SortOrder' })
    t.field('noshoots', { type: 'SortOrder' })
    t.field('gunCondition', { type: 'SortOrder' })
    t.field('shooterId', { type: 'SortOrder' })
    t.field('walkthroughTime', { type: 'SortOrder' })
  },
})

export const StageMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createAt', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
    t.field('papers', { type: 'SortOrder' })
    t.field('poppers', { type: 'SortOrder' })
    t.field('noshoots', { type: 'SortOrder' })
    t.field('gunCondition', { type: 'SortOrder' })
    t.field('shooterId', { type: 'SortOrder' })
    t.field('walkthroughTime', { type: 'SortOrder' })
  },
})

export const StageSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('papers', { type: 'SortOrder' })
    t.field('poppers', { type: 'SortOrder' })
    t.field('noshoots', { type: 'SortOrder' })
    t.field('gunCondition', { type: 'SortOrder' })
    t.field('shooterId', { type: 'SortOrder' })
    t.field('walkthroughTime', { type: 'SortOrder' })
  },
})

export const StringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('mode', { type: 'QueryMode' })
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedStringNullableFilter' })
    t.field('_max', { type: 'NestedStringNullableFilter' })
  },
})

export const DecimalWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DecimalWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Decimal' })
    t.list.field('in', { type: 'Decimal' })
    t.list.field('notIn', { type: 'Decimal' })
    t.field('lt', { type: 'Decimal' })
    t.field('lte', { type: 'Decimal' })
    t.field('gt', { type: 'Decimal' })
    t.field('gte', { type: 'Decimal' })
    t.field('not', { type: 'NestedDecimalWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedDecimalFilter' })
    t.field('_sum', { type: 'NestedDecimalFilter' })
    t.field('_min', { type: 'NestedDecimalFilter' })
    t.field('_max', { type: 'NestedDecimalFilter' })
  },
})

export const DateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeFilter' })
  },
})

export const ScoreboardCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createAt', { type: 'SortOrder' })
    t.field('lastUpdate', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
  },
})

export const ScoreboardAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const ScoreboardMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createAt', { type: 'SortOrder' })
    t.field('lastUpdate', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
  },
})

export const ScoreboardMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createAt', { type: 'SortOrder' })
    t.field('lastUpdate', { type: 'SortOrder' })
    t.field('name', { type: 'SortOrder' })
  },
})

export const ScoreboardSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const DateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedDateTimeFilter' })
    t.field('_max', { type: 'NestedDateTimeFilter' })
  },
})

export const IntNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableFilter' })
  },
})

export const StageNullableRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageNullableRelationFilter',
  definition(t) {
    t.field('is', { type: 'StageWhereInput' })
    t.field('isNot', { type: 'StageWhereInput' })
  },
})

export const ScoreboardNullableRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardNullableRelationFilter',
  definition(t) {
    t.field('is', { type: 'ScoreboardWhereInput' })
    t.field('isNot', { type: 'ScoreboardWhereInput' })
  },
})

export const ScorelistCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createAt', { type: 'SortOrder' })
    t.field('lastUpdate', { type: 'SortOrder' })
    t.field('scoreboardId', { type: 'SortOrder' })
    t.field('stageId', { type: 'SortOrder' })
  },
})

export const ScorelistAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistAvgOrderByAggregateInput',
  definition(t) {
    t.field('scoreboardId', { type: 'SortOrder' })
    t.field('stageId', { type: 'SortOrder' })
  },
})

export const ScorelistMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createAt', { type: 'SortOrder' })
    t.field('lastUpdate', { type: 'SortOrder' })
    t.field('scoreboardId', { type: 'SortOrder' })
    t.field('stageId', { type: 'SortOrder' })
  },
})

export const ScorelistMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('createAt', { type: 'SortOrder' })
    t.field('lastUpdate', { type: 'SortOrder' })
    t.field('scoreboardId', { type: 'SortOrder' })
    t.field('stageId', { type: 'SortOrder' })
  },
})

export const ScorelistSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistSumOrderByAggregateInput',
  definition(t) {
    t.field('scoreboardId', { type: 'SortOrder' })
    t.field('stageId', { type: 'SortOrder' })
  },
})

export const IntNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_avg', { type: 'NestedFloatNullableFilter' })
    t.field('_sum', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedIntNullableFilter' })
    t.field('_max', { type: 'NestedIntNullableFilter' })
  },
})

export const FloatFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FloatFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatFilter' })
  },
})

export const ProErrorsStoreListRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreListRelationFilter',
  definition(t) {
    t.field('every', { type: 'ProErrorsStoreWhereInput' })
    t.field('some', { type: 'ProErrorsStoreWhereInput' })
    t.field('none', { type: 'ProErrorsStoreWhereInput' })
  },
})

export const ScorelistNullableRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistNullableRelationFilter',
  definition(t) {
    t.field('is', { type: 'ScorelistWhereInput' })
    t.field('isNot', { type: 'ScorelistWhereInput' })
  },
})

export const ProErrorsStoreOrderByRelationAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreOrderByRelationAggregateInput',
  definition(t) {
    t.field('_count', { type: 'SortOrder' })
  },
})

export const ScoreCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('alphas', { type: 'SortOrder' })
    t.field('charlies', { type: 'SortOrder' })
    t.field('deltas', { type: 'SortOrder' })
    t.field('misses', { type: 'SortOrder' })
    t.field('noshoots', { type: 'SortOrder' })
    t.field('poppers', { type: 'SortOrder' })
    t.field('time', { type: 'SortOrder' })
    t.field('scorelistId', { type: 'SortOrder' })
    t.field('shooterId', { type: 'SortOrder' })
    t.field('round', { type: 'SortOrder' })
  },
})

export const ScoreAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('alphas', { type: 'SortOrder' })
    t.field('charlies', { type: 'SortOrder' })
    t.field('deltas', { type: 'SortOrder' })
    t.field('misses', { type: 'SortOrder' })
    t.field('noshoots', { type: 'SortOrder' })
    t.field('poppers', { type: 'SortOrder' })
    t.field('time', { type: 'SortOrder' })
    t.field('shooterId', { type: 'SortOrder' })
    t.field('round', { type: 'SortOrder' })
  },
})

export const ScoreMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('alphas', { type: 'SortOrder' })
    t.field('charlies', { type: 'SortOrder' })
    t.field('deltas', { type: 'SortOrder' })
    t.field('misses', { type: 'SortOrder' })
    t.field('noshoots', { type: 'SortOrder' })
    t.field('poppers', { type: 'SortOrder' })
    t.field('time', { type: 'SortOrder' })
    t.field('scorelistId', { type: 'SortOrder' })
    t.field('shooterId', { type: 'SortOrder' })
    t.field('round', { type: 'SortOrder' })
  },
})

export const ScoreMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('alphas', { type: 'SortOrder' })
    t.field('charlies', { type: 'SortOrder' })
    t.field('deltas', { type: 'SortOrder' })
    t.field('misses', { type: 'SortOrder' })
    t.field('noshoots', { type: 'SortOrder' })
    t.field('poppers', { type: 'SortOrder' })
    t.field('time', { type: 'SortOrder' })
    t.field('scorelistId', { type: 'SortOrder' })
    t.field('shooterId', { type: 'SortOrder' })
    t.field('round', { type: 'SortOrder' })
  },
})

export const ScoreSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('alphas', { type: 'SortOrder' })
    t.field('charlies', { type: 'SortOrder' })
    t.field('deltas', { type: 'SortOrder' })
    t.field('misses', { type: 'SortOrder' })
    t.field('noshoots', { type: 'SortOrder' })
    t.field('poppers', { type: 'SortOrder' })
    t.field('time', { type: 'SortOrder' })
    t.field('shooterId', { type: 'SortOrder' })
    t.field('round', { type: 'SortOrder' })
  },
})

export const FloatWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FloatWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedFloatFilter' })
    t.field('_min', { type: 'NestedFloatFilter' })
    t.field('_max', { type: 'NestedFloatFilter' })
  },
})

export const ProErrorObjectsCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorObjectsCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('index', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
  },
})

export const ProErrorObjectsAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorObjectsAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const ProErrorObjectsMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorObjectsMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('index', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
  },
})

export const ProErrorObjectsMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorObjectsMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('index', { type: 'SortOrder' })
    t.field('title', { type: 'SortOrder' })
    t.field('description', { type: 'SortOrder' })
  },
})

export const ProErrorObjectsSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorObjectsSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
  },
})

export const ProErrorObjectsRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorObjectsRelationFilter',
  definition(t) {
    t.field('is', { type: 'ProErrorObjectsWhereInput' })
    t.field('isNot', { type: 'ProErrorObjectsWhereInput' })
  },
})

export const ScoreNullableRelationFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreNullableRelationFilter',
  definition(t) {
    t.field('is', { type: 'ScoreWhereInput' })
    t.field('isNot', { type: 'ScoreWhereInput' })
  },
})

export const ProErrorsStoreCountOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreCountOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('count', { type: 'SortOrder' })
    t.field('scoreId', { type: 'SortOrder' })
    t.field('proErrorObjectsId', { type: 'SortOrder' })
  },
})

export const ProErrorsStoreAvgOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreAvgOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('count', { type: 'SortOrder' })
    t.field('scoreId', { type: 'SortOrder' })
    t.field('proErrorObjectsId', { type: 'SortOrder' })
  },
})

export const ProErrorsStoreMaxOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreMaxOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('count', { type: 'SortOrder' })
    t.field('scoreId', { type: 'SortOrder' })
    t.field('proErrorObjectsId', { type: 'SortOrder' })
  },
})

export const ProErrorsStoreMinOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreMinOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('count', { type: 'SortOrder' })
    t.field('scoreId', { type: 'SortOrder' })
    t.field('proErrorObjectsId', { type: 'SortOrder' })
  },
})

export const ProErrorsStoreSumOrderByAggregateInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreSumOrderByAggregateInput',
  definition(t) {
    t.field('id', { type: 'SortOrder' })
    t.field('count', { type: 'SortOrder' })
    t.field('scoreId', { type: 'SortOrder' })
    t.field('proErrorObjectsId', { type: 'SortOrder' })
  },
})

export const StageCreateNestedManyWithoutDesignerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageCreateNestedManyWithoutDesignerInput',
  definition(t) {
    t.list.field('create', { type: 'StageCreateWithoutDesignerInput' })
    t.list.field('connectOrCreate', {
      type: 'StageCreateOrConnectWithoutDesignerInput',
    })
    t.field('createMany', { type: 'StageCreateManyDesignerInputEnvelope' })
    t.list.field('connect', { type: 'StageWhereUniqueInput' })
  },
})

export const ScoreCreateNestedManyWithoutShooterInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreCreateNestedManyWithoutShooterInput',
  definition(t) {
    t.list.field('create', { type: 'ScoreCreateWithoutShooterInput' })
    t.list.field('connectOrCreate', {
      type: 'ScoreCreateOrConnectWithoutShooterInput',
    })
    t.field('createMany', { type: 'ScoreCreateManyShooterInputEnvelope' })
    t.list.field('connect', { type: 'ScoreWhereUniqueInput' })
  },
})

export const StageUncheckedCreateNestedManyWithoutDesignerInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'StageUncheckedCreateNestedManyWithoutDesignerInput',
    definition(t) {
      t.list.field('create', { type: 'StageCreateWithoutDesignerInput' })
      t.list.field('connectOrCreate', {
        type: 'StageCreateOrConnectWithoutDesignerInput',
      })
      t.field('createMany', { type: 'StageCreateManyDesignerInputEnvelope' })
      t.list.field('connect', { type: 'StageWhereUniqueInput' })
    },
  })

export const ScoreUncheckedCreateNestedManyWithoutShooterInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ScoreUncheckedCreateNestedManyWithoutShooterInput',
    definition(t) {
      t.list.field('create', { type: 'ScoreCreateWithoutShooterInput' })
      t.list.field('connectOrCreate', {
        type: 'ScoreCreateOrConnectWithoutShooterInput',
      })
      t.field('createMany', { type: 'ScoreCreateManyShooterInputEnvelope' })
      t.list.field('connect', { type: 'ScoreWhereUniqueInput' })
    },
  })

export const NullableDateTimeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableDateTimeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'DateTime' })
  },
})

export const StringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' })
  },
})

export const EnumDivisionFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'EnumDivisionFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Division' })
  },
})

export const StageUpdateManyWithoutDesignerNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageUpdateManyWithoutDesignerNestedInput',
  definition(t) {
    t.list.field('create', { type: 'StageCreateWithoutDesignerInput' })
    t.list.field('connectOrCreate', {
      type: 'StageCreateOrConnectWithoutDesignerInput',
    })
    t.list.field('upsert', {
      type: 'StageUpsertWithWhereUniqueWithoutDesignerInput',
    })
    t.field('createMany', { type: 'StageCreateManyDesignerInputEnvelope' })
    t.list.field('set', { type: 'StageWhereUniqueInput' })
    t.list.field('disconnect', { type: 'StageWhereUniqueInput' })
    t.list.field('delete', { type: 'StageWhereUniqueInput' })
    t.list.field('connect', { type: 'StageWhereUniqueInput' })
    t.list.field('update', {
      type: 'StageUpdateWithWhereUniqueWithoutDesignerInput',
    })
    t.list.field('updateMany', {
      type: 'StageUpdateManyWithWhereWithoutDesignerInput',
    })
    t.list.field('deleteMany', { type: 'StageScalarWhereInput' })
  },
})

export const ScoreUpdateManyWithoutShooterNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUpdateManyWithoutShooterNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ScoreCreateWithoutShooterInput' })
    t.list.field('connectOrCreate', {
      type: 'ScoreCreateOrConnectWithoutShooterInput',
    })
    t.list.field('upsert', {
      type: 'ScoreUpsertWithWhereUniqueWithoutShooterInput',
    })
    t.field('createMany', { type: 'ScoreCreateManyShooterInputEnvelope' })
    t.list.field('set', { type: 'ScoreWhereUniqueInput' })
    t.list.field('disconnect', { type: 'ScoreWhereUniqueInput' })
    t.list.field('delete', { type: 'ScoreWhereUniqueInput' })
    t.list.field('connect', { type: 'ScoreWhereUniqueInput' })
    t.list.field('update', {
      type: 'ScoreUpdateWithWhereUniqueWithoutShooterInput',
    })
    t.list.field('updateMany', {
      type: 'ScoreUpdateManyWithWhereWithoutShooterInput',
    })
    t.list.field('deleteMany', { type: 'ScoreScalarWhereInput' })
  },
})

export const IntFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'IntFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Int' })
    t.field('increment', { type: 'Int' })
    t.field('decrement', { type: 'Int' })
    t.field('multiply', { type: 'Int' })
    t.field('divide', { type: 'Int' })
  },
})

export const StageUncheckedUpdateManyWithoutDesignerNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'StageUncheckedUpdateManyWithoutDesignerNestedInput',
    definition(t) {
      t.list.field('create', { type: 'StageCreateWithoutDesignerInput' })
      t.list.field('connectOrCreate', {
        type: 'StageCreateOrConnectWithoutDesignerInput',
      })
      t.list.field('upsert', {
        type: 'StageUpsertWithWhereUniqueWithoutDesignerInput',
      })
      t.field('createMany', { type: 'StageCreateManyDesignerInputEnvelope' })
      t.list.field('set', { type: 'StageWhereUniqueInput' })
      t.list.field('disconnect', { type: 'StageWhereUniqueInput' })
      t.list.field('delete', { type: 'StageWhereUniqueInput' })
      t.list.field('connect', { type: 'StageWhereUniqueInput' })
      t.list.field('update', {
        type: 'StageUpdateWithWhereUniqueWithoutDesignerInput',
      })
      t.list.field('updateMany', {
        type: 'StageUpdateManyWithWhereWithoutDesignerInput',
      })
      t.list.field('deleteMany', { type: 'StageScalarWhereInput' })
    },
  })

export const ScoreUncheckedUpdateManyWithoutShooterNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ScoreUncheckedUpdateManyWithoutShooterNestedInput',
    definition(t) {
      t.list.field('create', { type: 'ScoreCreateWithoutShooterInput' })
      t.list.field('connectOrCreate', {
        type: 'ScoreCreateOrConnectWithoutShooterInput',
      })
      t.list.field('upsert', {
        type: 'ScoreUpsertWithWhereUniqueWithoutShooterInput',
      })
      t.field('createMany', { type: 'ScoreCreateManyShooterInputEnvelope' })
      t.list.field('set', { type: 'ScoreWhereUniqueInput' })
      t.list.field('disconnect', { type: 'ScoreWhereUniqueInput' })
      t.list.field('delete', { type: 'ScoreWhereUniqueInput' })
      t.list.field('connect', { type: 'ScoreWhereUniqueInput' })
      t.list.field('update', {
        type: 'ScoreUpdateWithWhereUniqueWithoutShooterInput',
      })
      t.list.field('updateMany', {
        type: 'ScoreUpdateManyWithWhereWithoutShooterInput',
      })
      t.list.field('deleteMany', { type: 'ScoreScalarWhereInput' })
    },
  })

export const ShooterCreateNestedOneWithoutStageInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterCreateNestedOneWithoutStageInput',
  definition(t) {
    t.field('create', { type: 'ShooterCreateWithoutStageInput' })
    t.field('connectOrCreate', {
      type: 'ShooterCreateOrConnectWithoutStageInput',
    })
    t.field('connect', { type: 'ShooterWhereUniqueInput' })
  },
})

export const ScorelistCreateNestedManyWithoutStageInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistCreateNestedManyWithoutStageInput',
  definition(t) {
    t.list.field('create', { type: 'ScorelistCreateWithoutStageInput' })
    t.list.field('connectOrCreate', {
      type: 'ScorelistCreateOrConnectWithoutStageInput',
    })
    t.field('createMany', { type: 'ScorelistCreateManyStageInputEnvelope' })
    t.list.field('connect', { type: 'ScorelistWhereUniqueInput' })
  },
})

export const ScorelistUncheckedCreateNestedManyWithoutStageInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ScorelistUncheckedCreateNestedManyWithoutStageInput',
    definition(t) {
      t.list.field('create', { type: 'ScorelistCreateWithoutStageInput' })
      t.list.field('connectOrCreate', {
        type: 'ScorelistCreateOrConnectWithoutStageInput',
      })
      t.field('createMany', { type: 'ScorelistCreateManyStageInputEnvelope' })
      t.list.field('connect', { type: 'ScorelistWhereUniqueInput' })
    },
  })

export const NullableStringFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableStringFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'String' })
  },
})

export const DecimalFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DecimalFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Decimal' })
    t.field('increment', { type: 'Decimal' })
    t.field('decrement', { type: 'Decimal' })
    t.field('multiply', { type: 'Decimal' })
    t.field('divide', { type: 'Decimal' })
  },
})

export const ShooterUpdateOneRequiredWithoutStageNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterUpdateOneRequiredWithoutStageNestedInput',
  definition(t) {
    t.field('create', { type: 'ShooterCreateWithoutStageInput' })
    t.field('connectOrCreate', {
      type: 'ShooterCreateOrConnectWithoutStageInput',
    })
    t.field('upsert', { type: 'ShooterUpsertWithoutStageInput' })
    t.field('connect', { type: 'ShooterWhereUniqueInput' })
    t.field('update', { type: 'ShooterUpdateToOneWithWhereWithoutStageInput' })
  },
})

export const ScorelistUpdateManyWithoutStageNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistUpdateManyWithoutStageNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ScorelistCreateWithoutStageInput' })
    t.list.field('connectOrCreate', {
      type: 'ScorelistCreateOrConnectWithoutStageInput',
    })
    t.list.field('upsert', {
      type: 'ScorelistUpsertWithWhereUniqueWithoutStageInput',
    })
    t.field('createMany', { type: 'ScorelistCreateManyStageInputEnvelope' })
    t.list.field('set', { type: 'ScorelistWhereUniqueInput' })
    t.list.field('disconnect', { type: 'ScorelistWhereUniqueInput' })
    t.list.field('delete', { type: 'ScorelistWhereUniqueInput' })
    t.list.field('connect', { type: 'ScorelistWhereUniqueInput' })
    t.list.field('update', {
      type: 'ScorelistUpdateWithWhereUniqueWithoutStageInput',
    })
    t.list.field('updateMany', {
      type: 'ScorelistUpdateManyWithWhereWithoutStageInput',
    })
    t.list.field('deleteMany', { type: 'ScorelistScalarWhereInput' })
  },
})

export const ScorelistUncheckedUpdateManyWithoutStageNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ScorelistUncheckedUpdateManyWithoutStageNestedInput',
    definition(t) {
      t.list.field('create', { type: 'ScorelistCreateWithoutStageInput' })
      t.list.field('connectOrCreate', {
        type: 'ScorelistCreateOrConnectWithoutStageInput',
      })
      t.list.field('upsert', {
        type: 'ScorelistUpsertWithWhereUniqueWithoutStageInput',
      })
      t.field('createMany', { type: 'ScorelistCreateManyStageInputEnvelope' })
      t.list.field('set', { type: 'ScorelistWhereUniqueInput' })
      t.list.field('disconnect', { type: 'ScorelistWhereUniqueInput' })
      t.list.field('delete', { type: 'ScorelistWhereUniqueInput' })
      t.list.field('connect', { type: 'ScorelistWhereUniqueInput' })
      t.list.field('update', {
        type: 'ScorelistUpdateWithWhereUniqueWithoutStageInput',
      })
      t.list.field('updateMany', {
        type: 'ScorelistUpdateManyWithWhereWithoutStageInput',
      })
      t.list.field('deleteMany', { type: 'ScorelistScalarWhereInput' })
    },
  })

export const ScorelistCreateNestedManyWithoutScoreboardInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistCreateNestedManyWithoutScoreboardInput',
  definition(t) {
    t.list.field('create', { type: 'ScorelistCreateWithoutScoreboardInput' })
    t.list.field('connectOrCreate', {
      type: 'ScorelistCreateOrConnectWithoutScoreboardInput',
    })
    t.field('createMany', {
      type: 'ScorelistCreateManyScoreboardInputEnvelope',
    })
    t.list.field('connect', { type: 'ScorelistWhereUniqueInput' })
  },
})

export const ScorelistUncheckedCreateNestedManyWithoutScoreboardInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ScorelistUncheckedCreateNestedManyWithoutScoreboardInput',
    definition(t) {
      t.list.field('create', { type: 'ScorelistCreateWithoutScoreboardInput' })
      t.list.field('connectOrCreate', {
        type: 'ScorelistCreateOrConnectWithoutScoreboardInput',
      })
      t.field('createMany', {
        type: 'ScorelistCreateManyScoreboardInputEnvelope',
      })
      t.list.field('connect', { type: 'ScorelistWhereUniqueInput' })
    },
  })

export const DateTimeFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'DateTimeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'DateTime' })
  },
})

export const ScorelistUpdateManyWithoutScoreboardNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistUpdateManyWithoutScoreboardNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ScorelistCreateWithoutScoreboardInput' })
    t.list.field('connectOrCreate', {
      type: 'ScorelistCreateOrConnectWithoutScoreboardInput',
    })
    t.list.field('upsert', {
      type: 'ScorelistUpsertWithWhereUniqueWithoutScoreboardInput',
    })
    t.field('createMany', {
      type: 'ScorelistCreateManyScoreboardInputEnvelope',
    })
    t.list.field('set', { type: 'ScorelistWhereUniqueInput' })
    t.list.field('disconnect', { type: 'ScorelistWhereUniqueInput' })
    t.list.field('delete', { type: 'ScorelistWhereUniqueInput' })
    t.list.field('connect', { type: 'ScorelistWhereUniqueInput' })
    t.list.field('update', {
      type: 'ScorelistUpdateWithWhereUniqueWithoutScoreboardInput',
    })
    t.list.field('updateMany', {
      type: 'ScorelistUpdateManyWithWhereWithoutScoreboardInput',
    })
    t.list.field('deleteMany', { type: 'ScorelistScalarWhereInput' })
  },
})

export const ScorelistUncheckedUpdateManyWithoutScoreboardNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ScorelistUncheckedUpdateManyWithoutScoreboardNestedInput',
    definition(t) {
      t.list.field('create', { type: 'ScorelistCreateWithoutScoreboardInput' })
      t.list.field('connectOrCreate', {
        type: 'ScorelistCreateOrConnectWithoutScoreboardInput',
      })
      t.list.field('upsert', {
        type: 'ScorelistUpsertWithWhereUniqueWithoutScoreboardInput',
      })
      t.field('createMany', {
        type: 'ScorelistCreateManyScoreboardInputEnvelope',
      })
      t.list.field('set', { type: 'ScorelistWhereUniqueInput' })
      t.list.field('disconnect', { type: 'ScorelistWhereUniqueInput' })
      t.list.field('delete', { type: 'ScorelistWhereUniqueInput' })
      t.list.field('connect', { type: 'ScorelistWhereUniqueInput' })
      t.list.field('update', {
        type: 'ScorelistUpdateWithWhereUniqueWithoutScoreboardInput',
      })
      t.list.field('updateMany', {
        type: 'ScorelistUpdateManyWithWhereWithoutScoreboardInput',
      })
      t.list.field('deleteMany', { type: 'ScorelistScalarWhereInput' })
    },
  })

export const StageCreateNestedOneWithoutScorelistInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageCreateNestedOneWithoutScorelistInput',
  definition(t) {
    t.field('create', { type: 'StageCreateWithoutScorelistInput' })
    t.field('connectOrCreate', {
      type: 'StageCreateOrConnectWithoutScorelistInput',
    })
    t.field('connect', { type: 'StageWhereUniqueInput' })
  },
})

export const ScoreCreateNestedManyWithoutScorelistInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreCreateNestedManyWithoutScorelistInput',
  definition(t) {
    t.list.field('create', { type: 'ScoreCreateWithoutScorelistInput' })
    t.list.field('connectOrCreate', {
      type: 'ScoreCreateOrConnectWithoutScorelistInput',
    })
    t.field('createMany', { type: 'ScoreCreateManyScorelistInputEnvelope' })
    t.list.field('connect', { type: 'ScoreWhereUniqueInput' })
  },
})

export const ScoreboardCreateNestedOneWithoutScorelistsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardCreateNestedOneWithoutScorelistsInput',
  definition(t) {
    t.field('create', { type: 'ScoreboardCreateWithoutScorelistsInput' })
    t.field('connectOrCreate', {
      type: 'ScoreboardCreateOrConnectWithoutScorelistsInput',
    })
    t.field('connect', { type: 'ScoreboardWhereUniqueInput' })
  },
})

export const ScoreUncheckedCreateNestedManyWithoutScorelistInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ScoreUncheckedCreateNestedManyWithoutScorelistInput',
    definition(t) {
      t.list.field('create', { type: 'ScoreCreateWithoutScorelistInput' })
      t.list.field('connectOrCreate', {
        type: 'ScoreCreateOrConnectWithoutScorelistInput',
      })
      t.field('createMany', { type: 'ScoreCreateManyScorelistInputEnvelope' })
      t.list.field('connect', { type: 'ScoreWhereUniqueInput' })
    },
  })

export const StageUpdateOneWithoutScorelistNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageUpdateOneWithoutScorelistNestedInput',
  definition(t) {
    t.field('create', { type: 'StageCreateWithoutScorelistInput' })
    t.field('connectOrCreate', {
      type: 'StageCreateOrConnectWithoutScorelistInput',
    })
    t.field('upsert', { type: 'StageUpsertWithoutScorelistInput' })
    t.field('disconnect', { type: 'StageWhereInput' })
    t.field('delete', { type: 'StageWhereInput' })
    t.field('connect', { type: 'StageWhereUniqueInput' })
    t.field('update', {
      type: 'StageUpdateToOneWithWhereWithoutScorelistInput',
    })
  },
})

export const ScoreUpdateManyWithoutScorelistNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUpdateManyWithoutScorelistNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ScoreCreateWithoutScorelistInput' })
    t.list.field('connectOrCreate', {
      type: 'ScoreCreateOrConnectWithoutScorelistInput',
    })
    t.list.field('upsert', {
      type: 'ScoreUpsertWithWhereUniqueWithoutScorelistInput',
    })
    t.field('createMany', { type: 'ScoreCreateManyScorelistInputEnvelope' })
    t.list.field('set', { type: 'ScoreWhereUniqueInput' })
    t.list.field('disconnect', { type: 'ScoreWhereUniqueInput' })
    t.list.field('delete', { type: 'ScoreWhereUniqueInput' })
    t.list.field('connect', { type: 'ScoreWhereUniqueInput' })
    t.list.field('update', {
      type: 'ScoreUpdateWithWhereUniqueWithoutScorelistInput',
    })
    t.list.field('updateMany', {
      type: 'ScoreUpdateManyWithWhereWithoutScorelistInput',
    })
    t.list.field('deleteMany', { type: 'ScoreScalarWhereInput' })
  },
})

export const ScoreboardUpdateOneWithoutScorelistsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardUpdateOneWithoutScorelistsNestedInput',
  definition(t) {
    t.field('create', { type: 'ScoreboardCreateWithoutScorelistsInput' })
    t.field('connectOrCreate', {
      type: 'ScoreboardCreateOrConnectWithoutScorelistsInput',
    })
    t.field('upsert', { type: 'ScoreboardUpsertWithoutScorelistsInput' })
    t.field('disconnect', { type: 'ScoreboardWhereInput' })
    t.field('delete', { type: 'ScoreboardWhereInput' })
    t.field('connect', { type: 'ScoreboardWhereUniqueInput' })
    t.field('update', {
      type: 'ScoreboardUpdateToOneWithWhereWithoutScorelistsInput',
    })
  },
})

export const NullableIntFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NullableIntFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Int' })
    t.field('increment', { type: 'Int' })
    t.field('decrement', { type: 'Int' })
    t.field('multiply', { type: 'Int' })
    t.field('divide', { type: 'Int' })
  },
})

export const ScoreUncheckedUpdateManyWithoutScorelistNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ScoreUncheckedUpdateManyWithoutScorelistNestedInput',
    definition(t) {
      t.list.field('create', { type: 'ScoreCreateWithoutScorelistInput' })
      t.list.field('connectOrCreate', {
        type: 'ScoreCreateOrConnectWithoutScorelistInput',
      })
      t.list.field('upsert', {
        type: 'ScoreUpsertWithWhereUniqueWithoutScorelistInput',
      })
      t.field('createMany', { type: 'ScoreCreateManyScorelistInputEnvelope' })
      t.list.field('set', { type: 'ScoreWhereUniqueInput' })
      t.list.field('disconnect', { type: 'ScoreWhereUniqueInput' })
      t.list.field('delete', { type: 'ScoreWhereUniqueInput' })
      t.list.field('connect', { type: 'ScoreWhereUniqueInput' })
      t.list.field('update', {
        type: 'ScoreUpdateWithWhereUniqueWithoutScorelistInput',
      })
      t.list.field('updateMany', {
        type: 'ScoreUpdateManyWithWhereWithoutScorelistInput',
      })
      t.list.field('deleteMany', { type: 'ScoreScalarWhereInput' })
    },
  })

export const ShooterCreateNestedOneWithoutScoreInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterCreateNestedOneWithoutScoreInput',
  definition(t) {
    t.field('create', { type: 'ShooterCreateWithoutScoreInput' })
    t.field('connectOrCreate', {
      type: 'ShooterCreateOrConnectWithoutScoreInput',
    })
    t.field('connect', { type: 'ShooterWhereUniqueInput' })
  },
})

export const ProErrorsStoreCreateNestedManyWithoutScoreInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreCreateNestedManyWithoutScoreInput',
  definition(t) {
    t.list.field('create', { type: 'ProErrorsStoreCreateWithoutScoreInput' })
    t.list.field('connectOrCreate', {
      type: 'ProErrorsStoreCreateOrConnectWithoutScoreInput',
    })
    t.field('createMany', {
      type: 'ProErrorsStoreCreateManyScoreInputEnvelope',
    })
    t.list.field('connect', { type: 'ProErrorsStoreWhereUniqueInput' })
  },
})

export const ScorelistCreateNestedOneWithoutScoresInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistCreateNestedOneWithoutScoresInput',
  definition(t) {
    t.field('create', { type: 'ScorelistCreateWithoutScoresInput' })
    t.field('connectOrCreate', {
      type: 'ScorelistCreateOrConnectWithoutScoresInput',
    })
    t.field('connect', { type: 'ScorelistWhereUniqueInput' })
  },
})

export const ProErrorsStoreUncheckedCreateNestedManyWithoutScoreInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProErrorsStoreUncheckedCreateNestedManyWithoutScoreInput',
    definition(t) {
      t.list.field('create', { type: 'ProErrorsStoreCreateWithoutScoreInput' })
      t.list.field('connectOrCreate', {
        type: 'ProErrorsStoreCreateOrConnectWithoutScoreInput',
      })
      t.field('createMany', {
        type: 'ProErrorsStoreCreateManyScoreInputEnvelope',
      })
      t.list.field('connect', { type: 'ProErrorsStoreWhereUniqueInput' })
    },
  })

export const FloatFieldUpdateOperationsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'FloatFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: 'Float' })
    t.field('increment', { type: 'Float' })
    t.field('decrement', { type: 'Float' })
    t.field('multiply', { type: 'Float' })
    t.field('divide', { type: 'Float' })
  },
})

export const ShooterUpdateOneRequiredWithoutScoreNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterUpdateOneRequiredWithoutScoreNestedInput',
  definition(t) {
    t.field('create', { type: 'ShooterCreateWithoutScoreInput' })
    t.field('connectOrCreate', {
      type: 'ShooterCreateOrConnectWithoutScoreInput',
    })
    t.field('upsert', { type: 'ShooterUpsertWithoutScoreInput' })
    t.field('connect', { type: 'ShooterWhereUniqueInput' })
    t.field('update', { type: 'ShooterUpdateToOneWithWhereWithoutScoreInput' })
  },
})

export const ProErrorsStoreUpdateManyWithoutScoreNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreUpdateManyWithoutScoreNestedInput',
  definition(t) {
    t.list.field('create', { type: 'ProErrorsStoreCreateWithoutScoreInput' })
    t.list.field('connectOrCreate', {
      type: 'ProErrorsStoreCreateOrConnectWithoutScoreInput',
    })
    t.list.field('upsert', {
      type: 'ProErrorsStoreUpsertWithWhereUniqueWithoutScoreInput',
    })
    t.field('createMany', {
      type: 'ProErrorsStoreCreateManyScoreInputEnvelope',
    })
    t.list.field('set', { type: 'ProErrorsStoreWhereUniqueInput' })
    t.list.field('disconnect', { type: 'ProErrorsStoreWhereUniqueInput' })
    t.list.field('delete', { type: 'ProErrorsStoreWhereUniqueInput' })
    t.list.field('connect', { type: 'ProErrorsStoreWhereUniqueInput' })
    t.list.field('update', {
      type: 'ProErrorsStoreUpdateWithWhereUniqueWithoutScoreInput',
    })
    t.list.field('updateMany', {
      type: 'ProErrorsStoreUpdateManyWithWhereWithoutScoreInput',
    })
    t.list.field('deleteMany', { type: 'ProErrorsStoreScalarWhereInput' })
  },
})

export const ScorelistUpdateOneWithoutScoresNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistUpdateOneWithoutScoresNestedInput',
  definition(t) {
    t.field('create', { type: 'ScorelistCreateWithoutScoresInput' })
    t.field('connectOrCreate', {
      type: 'ScorelistCreateOrConnectWithoutScoresInput',
    })
    t.field('upsert', { type: 'ScorelistUpsertWithoutScoresInput' })
    t.field('disconnect', { type: 'ScorelistWhereInput' })
    t.field('delete', { type: 'ScorelistWhereInput' })
    t.field('connect', { type: 'ScorelistWhereUniqueInput' })
    t.field('update', {
      type: 'ScorelistUpdateToOneWithWhereWithoutScoresInput',
    })
  },
})

export const ProErrorsStoreUncheckedUpdateManyWithoutScoreNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProErrorsStoreUncheckedUpdateManyWithoutScoreNestedInput',
    definition(t) {
      t.list.field('create', { type: 'ProErrorsStoreCreateWithoutScoreInput' })
      t.list.field('connectOrCreate', {
        type: 'ProErrorsStoreCreateOrConnectWithoutScoreInput',
      })
      t.list.field('upsert', {
        type: 'ProErrorsStoreUpsertWithWhereUniqueWithoutScoreInput',
      })
      t.field('createMany', {
        type: 'ProErrorsStoreCreateManyScoreInputEnvelope',
      })
      t.list.field('set', { type: 'ProErrorsStoreWhereUniqueInput' })
      t.list.field('disconnect', { type: 'ProErrorsStoreWhereUniqueInput' })
      t.list.field('delete', { type: 'ProErrorsStoreWhereUniqueInput' })
      t.list.field('connect', { type: 'ProErrorsStoreWhereUniqueInput' })
      t.list.field('update', {
        type: 'ProErrorsStoreUpdateWithWhereUniqueWithoutScoreInput',
      })
      t.list.field('updateMany', {
        type: 'ProErrorsStoreUpdateManyWithWhereWithoutScoreInput',
      })
      t.list.field('deleteMany', { type: 'ProErrorsStoreScalarWhereInput' })
    },
  })

export const ProErrorsStoreCreateNestedManyWithoutProErrorInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProErrorsStoreCreateNestedManyWithoutProErrorInput',
    definition(t) {
      t.list.field('create', {
        type: 'ProErrorsStoreCreateWithoutProErrorInput',
      })
      t.list.field('connectOrCreate', {
        type: 'ProErrorsStoreCreateOrConnectWithoutProErrorInput',
      })
      t.field('createMany', {
        type: 'ProErrorsStoreCreateManyProErrorInputEnvelope',
      })
      t.list.field('connect', { type: 'ProErrorsStoreWhereUniqueInput' })
    },
  })

export const ProErrorsStoreUncheckedCreateNestedManyWithoutProErrorInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProErrorsStoreUncheckedCreateNestedManyWithoutProErrorInput',
    definition(t) {
      t.list.field('create', {
        type: 'ProErrorsStoreCreateWithoutProErrorInput',
      })
      t.list.field('connectOrCreate', {
        type: 'ProErrorsStoreCreateOrConnectWithoutProErrorInput',
      })
      t.field('createMany', {
        type: 'ProErrorsStoreCreateManyProErrorInputEnvelope',
      })
      t.list.field('connect', { type: 'ProErrorsStoreWhereUniqueInput' })
    },
  })

export const ProErrorsStoreUpdateManyWithoutProErrorNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProErrorsStoreUpdateManyWithoutProErrorNestedInput',
    definition(t) {
      t.list.field('create', {
        type: 'ProErrorsStoreCreateWithoutProErrorInput',
      })
      t.list.field('connectOrCreate', {
        type: 'ProErrorsStoreCreateOrConnectWithoutProErrorInput',
      })
      t.list.field('upsert', {
        type: 'ProErrorsStoreUpsertWithWhereUniqueWithoutProErrorInput',
      })
      t.field('createMany', {
        type: 'ProErrorsStoreCreateManyProErrorInputEnvelope',
      })
      t.list.field('set', { type: 'ProErrorsStoreWhereUniqueInput' })
      t.list.field('disconnect', { type: 'ProErrorsStoreWhereUniqueInput' })
      t.list.field('delete', { type: 'ProErrorsStoreWhereUniqueInput' })
      t.list.field('connect', { type: 'ProErrorsStoreWhereUniqueInput' })
      t.list.field('update', {
        type: 'ProErrorsStoreUpdateWithWhereUniqueWithoutProErrorInput',
      })
      t.list.field('updateMany', {
        type: 'ProErrorsStoreUpdateManyWithWhereWithoutProErrorInput',
      })
      t.list.field('deleteMany', { type: 'ProErrorsStoreScalarWhereInput' })
    },
  })

export const ProErrorsStoreUncheckedUpdateManyWithoutProErrorNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProErrorsStoreUncheckedUpdateManyWithoutProErrorNestedInput',
    definition(t) {
      t.list.field('create', {
        type: 'ProErrorsStoreCreateWithoutProErrorInput',
      })
      t.list.field('connectOrCreate', {
        type: 'ProErrorsStoreCreateOrConnectWithoutProErrorInput',
      })
      t.list.field('upsert', {
        type: 'ProErrorsStoreUpsertWithWhereUniqueWithoutProErrorInput',
      })
      t.field('createMany', {
        type: 'ProErrorsStoreCreateManyProErrorInputEnvelope',
      })
      t.list.field('set', { type: 'ProErrorsStoreWhereUniqueInput' })
      t.list.field('disconnect', { type: 'ProErrorsStoreWhereUniqueInput' })
      t.list.field('delete', { type: 'ProErrorsStoreWhereUniqueInput' })
      t.list.field('connect', { type: 'ProErrorsStoreWhereUniqueInput' })
      t.list.field('update', {
        type: 'ProErrorsStoreUpdateWithWhereUniqueWithoutProErrorInput',
      })
      t.list.field('updateMany', {
        type: 'ProErrorsStoreUpdateManyWithWhereWithoutProErrorInput',
      })
      t.list.field('deleteMany', { type: 'ProErrorsStoreScalarWhereInput' })
    },
  })

export const ProErrorObjectsCreateNestedOneWithoutProErrorsStoreInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProErrorObjectsCreateNestedOneWithoutProErrorsStoreInput',
    definition(t) {
      t.field('create', {
        type: 'ProErrorObjectsCreateWithoutProErrorsStoreInput',
      })
      t.field('connectOrCreate', {
        type: 'ProErrorObjectsCreateOrConnectWithoutProErrorsStoreInput',
      })
      t.field('connect', { type: 'ProErrorObjectsWhereUniqueInput' })
    },
  })

export const ScoreCreateNestedOneWithoutProErrorsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreCreateNestedOneWithoutProErrorsInput',
  definition(t) {
    t.field('create', { type: 'ScoreCreateWithoutProErrorsInput' })
    t.field('connectOrCreate', {
      type: 'ScoreCreateOrConnectWithoutProErrorsInput',
    })
    t.field('connect', { type: 'ScoreWhereUniqueInput' })
  },
})

export const ProErrorObjectsUpdateOneRequiredWithoutProErrorsStoreNestedInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProErrorObjectsUpdateOneRequiredWithoutProErrorsStoreNestedInput',
    definition(t) {
      t.field('create', {
        type: 'ProErrorObjectsCreateWithoutProErrorsStoreInput',
      })
      t.field('connectOrCreate', {
        type: 'ProErrorObjectsCreateOrConnectWithoutProErrorsStoreInput',
      })
      t.field('upsert', {
        type: 'ProErrorObjectsUpsertWithoutProErrorsStoreInput',
      })
      t.field('connect', { type: 'ProErrorObjectsWhereUniqueInput' })
      t.field('update', {
        type: 'ProErrorObjectsUpdateToOneWithWhereWithoutProErrorsStoreInput',
      })
    },
  })

export const ScoreUpdateOneWithoutProErrorsNestedInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUpdateOneWithoutProErrorsNestedInput',
  definition(t) {
    t.field('create', { type: 'ScoreCreateWithoutProErrorsInput' })
    t.field('connectOrCreate', {
      type: 'ScoreCreateOrConnectWithoutProErrorsInput',
    })
    t.field('upsert', { type: 'ScoreUpsertWithoutProErrorsInput' })
    t.field('disconnect', { type: 'ScoreWhereInput' })
    t.field('delete', { type: 'ScoreWhereInput' })
    t.field('connect', { type: 'ScoreWhereUniqueInput' })
    t.field('update', {
      type: 'ScoreUpdateToOneWithWhereWithoutProErrorsInput',
    })
  },
})

export const NestedIntFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntFilter' })
  },
})

export const NestedDateTimeNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeNullableFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeNullableFilter' })
  },
})

export const NestedStringFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringFilter' })
  },
})

export const NestedEnumDivisionFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumDivisionFilter',
  definition(t) {
    t.field('equals', { type: 'Division' })
    t.list.field('in', { type: 'Division' })
    t.list.field('notIn', { type: 'Division' })
    t.field('not', { type: 'NestedEnumDivisionFilter' })
  },
})

export const NestedIntWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedIntFilter' })
    t.field('_max', { type: 'NestedIntFilter' })
  },
})

export const NestedFloatFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedFloatFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatFilter' })
  },
})

export const NestedDateTimeNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedDateTimeNullableFilter' })
    t.field('_max', { type: 'NestedDateTimeNullableFilter' })
  },
})

export const NestedIntNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableFilter' })
  },
})

export const NestedStringWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedStringFilter' })
    t.field('_max', { type: 'NestedStringFilter' })
  },
})

export const NestedEnumDivisionWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedEnumDivisionWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Division' })
    t.list.field('in', { type: 'Division' })
    t.list.field('notIn', { type: 'Division' })
    t.field('not', { type: 'NestedEnumDivisionWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedEnumDivisionFilter' })
    t.field('_max', { type: 'NestedEnumDivisionFilter' })
  },
})

export const NestedStringNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringNullableFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringNullableFilter' })
  },
})

export const NestedDecimalFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDecimalFilter',
  definition(t) {
    t.field('equals', { type: 'Decimal' })
    t.list.field('in', { type: 'Decimal' })
    t.list.field('notIn', { type: 'Decimal' })
    t.field('lt', { type: 'Decimal' })
    t.field('lte', { type: 'Decimal' })
    t.field('gt', { type: 'Decimal' })
    t.field('gte', { type: 'Decimal' })
    t.field('not', { type: 'NestedDecimalFilter' })
  },
})

export const NestedStringNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedStringNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'String' })
    t.list.field('in', { type: 'String' })
    t.list.field('notIn', { type: 'String' })
    t.field('lt', { type: 'String' })
    t.field('lte', { type: 'String' })
    t.field('gt', { type: 'String' })
    t.field('gte', { type: 'String' })
    t.field('contains', { type: 'String' })
    t.field('startsWith', { type: 'String' })
    t.field('endsWith', { type: 'String' })
    t.field('not', { type: 'NestedStringNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedStringNullableFilter' })
    t.field('_max', { type: 'NestedStringNullableFilter' })
  },
})

export const NestedDecimalWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDecimalWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Decimal' })
    t.list.field('in', { type: 'Decimal' })
    t.list.field('notIn', { type: 'Decimal' })
    t.field('lt', { type: 'Decimal' })
    t.field('lte', { type: 'Decimal' })
    t.field('gt', { type: 'Decimal' })
    t.field('gte', { type: 'Decimal' })
    t.field('not', { type: 'NestedDecimalWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedDecimalFilter' })
    t.field('_sum', { type: 'NestedDecimalFilter' })
    t.field('_min', { type: 'NestedDecimalFilter' })
    t.field('_max', { type: 'NestedDecimalFilter' })
  },
})

export const NestedDateTimeFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeFilter' })
  },
})

export const NestedDateTimeWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedDateTimeWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'DateTime' })
    t.list.field('in', { type: 'DateTime' })
    t.list.field('notIn', { type: 'DateTime' })
    t.field('lt', { type: 'DateTime' })
    t.field('lte', { type: 'DateTime' })
    t.field('gt', { type: 'DateTime' })
    t.field('gte', { type: 'DateTime' })
    t.field('not', { type: 'NestedDateTimeWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_min', { type: 'NestedDateTimeFilter' })
    t.field('_max', { type: 'NestedDateTimeFilter' })
  },
})

export const NestedIntNullableWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedIntNullableWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Int' })
    t.list.field('in', { type: 'Int' })
    t.list.field('notIn', { type: 'Int' })
    t.field('lt', { type: 'Int' })
    t.field('lte', { type: 'Int' })
    t.field('gt', { type: 'Int' })
    t.field('gte', { type: 'Int' })
    t.field('not', { type: 'NestedIntNullableWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntNullableFilter' })
    t.field('_avg', { type: 'NestedFloatNullableFilter' })
    t.field('_sum', { type: 'NestedIntNullableFilter' })
    t.field('_min', { type: 'NestedIntNullableFilter' })
    t.field('_max', { type: 'NestedIntNullableFilter' })
  },
})

export const NestedFloatNullableFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedFloatNullableFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatNullableFilter' })
  },
})

export const NestedFloatWithAggregatesFilter = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'NestedFloatWithAggregatesFilter',
  definition(t) {
    t.field('equals', { type: 'Float' })
    t.list.field('in', { type: 'Float' })
    t.list.field('notIn', { type: 'Float' })
    t.field('lt', { type: 'Float' })
    t.field('lte', { type: 'Float' })
    t.field('gt', { type: 'Float' })
    t.field('gte', { type: 'Float' })
    t.field('not', { type: 'NestedFloatWithAggregatesFilter' })
    t.field('_count', { type: 'NestedIntFilter' })
    t.field('_avg', { type: 'NestedFloatFilter' })
    t.field('_sum', { type: 'NestedFloatFilter' })
    t.field('_min', { type: 'NestedFloatFilter' })
    t.field('_max', { type: 'NestedFloatFilter' })
  },
})

export const StageCreateWithoutDesignerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageCreateWithoutDesignerInput',
  definition(t) {
    t.field('createAt', { type: 'DateTime' })
    t.nonNull.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.nonNull.field('papers', { type: 'Int' })
    t.nonNull.field('poppers', { type: 'Int' })
    t.nonNull.field('noshoots', { type: 'Int' })
    t.nonNull.field('gunCondition', { type: 'Int' })
    t.nonNull.field('walkthroughTime', { type: 'Decimal' })
    t.field('Scorelist', { type: 'ScorelistCreateNestedManyWithoutStageInput' })
  },
})

export const StageUncheckedCreateWithoutDesignerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageUncheckedCreateWithoutDesignerInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createAt', { type: 'DateTime' })
    t.nonNull.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.nonNull.field('papers', { type: 'Int' })
    t.nonNull.field('poppers', { type: 'Int' })
    t.nonNull.field('noshoots', { type: 'Int' })
    t.nonNull.field('gunCondition', { type: 'Int' })
    t.nonNull.field('walkthroughTime', { type: 'Decimal' })
    t.field('Scorelist', {
      type: 'ScorelistUncheckedCreateNestedManyWithoutStageInput',
    })
  },
})

export const StageCreateOrConnectWithoutDesignerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageCreateOrConnectWithoutDesignerInput',
  definition(t) {
    t.nonNull.field('where', { type: 'StageWhereUniqueInput' })
    t.nonNull.field('create', { type: 'StageCreateWithoutDesignerInput' })
  },
})

export const StageCreateManyDesignerInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageCreateManyDesignerInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'StageCreateManyDesignerInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const ScoreCreateWithoutShooterInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreCreateWithoutShooterInput',
  definition(t) {
    t.nonNull.field('id', { type: 'Int' })
    t.nonNull.field('alphas', { type: 'Int' })
    t.nonNull.field('charlies', { type: 'Int' })
    t.nonNull.field('deltas', { type: 'Int' })
    t.nonNull.field('misses', { type: 'Int' })
    t.nonNull.field('noshoots', { type: 'Int' })
    t.field('poppers', { type: 'Int' })
    t.nonNull.field('time', { type: 'Float' })
    t.nonNull.field('round', { type: 'Int' })
    t.field('proErrors', {
      type: 'ProErrorsStoreCreateNestedManyWithoutScoreInput',
    })
    t.field('scorelist', { type: 'ScorelistCreateNestedOneWithoutScoresInput' })
  },
})

export const ScoreUncheckedCreateWithoutShooterInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUncheckedCreateWithoutShooterInput',
  definition(t) {
    t.nonNull.field('id', { type: 'Int' })
    t.nonNull.field('alphas', { type: 'Int' })
    t.nonNull.field('charlies', { type: 'Int' })
    t.nonNull.field('deltas', { type: 'Int' })
    t.nonNull.field('misses', { type: 'Int' })
    t.nonNull.field('noshoots', { type: 'Int' })
    t.field('poppers', { type: 'Int' })
    t.nonNull.field('time', { type: 'Float' })
    t.field('scorelistId', { type: 'String' })
    t.nonNull.field('round', { type: 'Int' })
    t.field('proErrors', {
      type: 'ProErrorsStoreUncheckedCreateNestedManyWithoutScoreInput',
    })
  },
})

export const ScoreCreateOrConnectWithoutShooterInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreCreateOrConnectWithoutShooterInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ScoreWhereUniqueInput' })
    t.nonNull.field('create', { type: 'ScoreCreateWithoutShooterInput' })
  },
})

export const ScoreCreateManyShooterInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreCreateManyShooterInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'ScoreCreateManyShooterInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const StageUpsertWithWhereUniqueWithoutDesignerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageUpsertWithWhereUniqueWithoutDesignerInput',
  definition(t) {
    t.nonNull.field('where', { type: 'StageWhereUniqueInput' })
    t.nonNull.field('update', { type: 'StageUpdateWithoutDesignerInput' })
    t.nonNull.field('create', { type: 'StageCreateWithoutDesignerInput' })
  },
})

export const StageUpdateWithWhereUniqueWithoutDesignerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageUpdateWithWhereUniqueWithoutDesignerInput',
  definition(t) {
    t.nonNull.field('where', { type: 'StageWhereUniqueInput' })
    t.nonNull.field('data', { type: 'StageUpdateWithoutDesignerInput' })
  },
})

export const StageUpdateManyWithWhereWithoutDesignerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageUpdateManyWithWhereWithoutDesignerInput',
  definition(t) {
    t.nonNull.field('where', { type: 'StageScalarWhereInput' })
    t.nonNull.field('data', { type: 'StageUpdateManyMutationInput' })
  },
})

export const StageScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'StageScalarWhereInput' })
    t.list.field('OR', { type: 'StageScalarWhereInput' })
    t.list.field('NOT', { type: 'StageScalarWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('createAt', { type: 'DateTimeNullableFilter' })
    t.field('name', { type: 'StringFilter' })
    t.field('description', { type: 'StringNullableFilter' })
    t.field('papers', { type: 'IntFilter' })
    t.field('poppers', { type: 'IntFilter' })
    t.field('noshoots', { type: 'IntFilter' })
    t.field('gunCondition', { type: 'IntFilter' })
    t.field('shooterId', { type: 'IntFilter' })
    t.field('walkthroughTime', { type: 'DecimalFilter' })
  },
})

export const ScoreUpsertWithWhereUniqueWithoutShooterInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUpsertWithWhereUniqueWithoutShooterInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ScoreWhereUniqueInput' })
    t.nonNull.field('update', { type: 'ScoreUpdateWithoutShooterInput' })
    t.nonNull.field('create', { type: 'ScoreCreateWithoutShooterInput' })
  },
})

export const ScoreUpdateWithWhereUniqueWithoutShooterInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUpdateWithWhereUniqueWithoutShooterInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ScoreWhereUniqueInput' })
    t.nonNull.field('data', { type: 'ScoreUpdateWithoutShooterInput' })
  },
})

export const ScoreUpdateManyWithWhereWithoutShooterInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUpdateManyWithWhereWithoutShooterInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ScoreScalarWhereInput' })
    t.nonNull.field('data', { type: 'ScoreUpdateManyMutationInput' })
  },
})

export const ScoreScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ScoreScalarWhereInput' })
    t.list.field('OR', { type: 'ScoreScalarWhereInput' })
    t.list.field('NOT', { type: 'ScoreScalarWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('alphas', { type: 'IntFilter' })
    t.field('charlies', { type: 'IntFilter' })
    t.field('deltas', { type: 'IntFilter' })
    t.field('misses', { type: 'IntFilter' })
    t.field('noshoots', { type: 'IntFilter' })
    t.field('poppers', { type: 'IntNullableFilter' })
    t.field('time', { type: 'FloatFilter' })
    t.field('scorelistId', { type: 'StringNullableFilter' })
    t.field('shooterId', { type: 'IntFilter' })
    t.field('round', { type: 'IntFilter' })
  },
})

export const ShooterCreateWithoutStageInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterCreateWithoutStageInput',
  definition(t) {
    t.field('createAt', { type: 'DateTime' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('division', { type: 'Division' })
    t.nonNull.field('email', { type: 'String' })
    t.field('score', { type: 'ScoreCreateNestedManyWithoutShooterInput' })
  },
})

export const ShooterUncheckedCreateWithoutStageInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterUncheckedCreateWithoutStageInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createAt', { type: 'DateTime' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('division', { type: 'Division' })
    t.nonNull.field('email', { type: 'String' })
    t.field('score', {
      type: 'ScoreUncheckedCreateNestedManyWithoutShooterInput',
    })
  },
})

export const ShooterCreateOrConnectWithoutStageInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterCreateOrConnectWithoutStageInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ShooterWhereUniqueInput' })
    t.nonNull.field('create', { type: 'ShooterCreateWithoutStageInput' })
  },
})

export const ScorelistCreateWithoutStageInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistCreateWithoutStageInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createAt', { type: 'DateTime' })
    t.field('lastUpdate', { type: 'DateTime' })
    t.field('scores', { type: 'ScoreCreateNestedManyWithoutScorelistInput' })
    t.field('scoreboard', {
      type: 'ScoreboardCreateNestedOneWithoutScorelistsInput',
    })
  },
})

export const ScorelistUncheckedCreateWithoutStageInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistUncheckedCreateWithoutStageInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createAt', { type: 'DateTime' })
    t.field('lastUpdate', { type: 'DateTime' })
    t.field('scoreboardId', { type: 'Int' })
    t.field('scores', {
      type: 'ScoreUncheckedCreateNestedManyWithoutScorelistInput',
    })
  },
})

export const ScorelistCreateOrConnectWithoutStageInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistCreateOrConnectWithoutStageInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ScorelistWhereUniqueInput' })
    t.nonNull.field('create', { type: 'ScorelistCreateWithoutStageInput' })
  },
})

export const ScorelistCreateManyStageInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistCreateManyStageInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'ScorelistCreateManyStageInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const ShooterUpsertWithoutStageInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterUpsertWithoutStageInput',
  definition(t) {
    t.nonNull.field('update', { type: 'ShooterUpdateWithoutStageInput' })
    t.nonNull.field('create', { type: 'ShooterCreateWithoutStageInput' })
    t.field('where', { type: 'ShooterWhereInput' })
  },
})

export const ShooterUpdateToOneWithWhereWithoutStageInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterUpdateToOneWithWhereWithoutStageInput',
  definition(t) {
    t.field('where', { type: 'ShooterWhereInput' })
    t.nonNull.field('data', { type: 'ShooterUpdateWithoutStageInput' })
  },
})

export const ShooterUpdateWithoutStageInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterUpdateWithoutStageInput',
  definition(t) {
    t.field('createAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('division', { type: 'EnumDivisionFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('score', { type: 'ScoreUpdateManyWithoutShooterNestedInput' })
  },
})

export const ShooterUncheckedUpdateWithoutStageInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterUncheckedUpdateWithoutStageInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('division', { type: 'EnumDivisionFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('score', {
      type: 'ScoreUncheckedUpdateManyWithoutShooterNestedInput',
    })
  },
})

export const ScorelistUpsertWithWhereUniqueWithoutStageInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistUpsertWithWhereUniqueWithoutStageInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ScorelistWhereUniqueInput' })
    t.nonNull.field('update', { type: 'ScorelistUpdateWithoutStageInput' })
    t.nonNull.field('create', { type: 'ScorelistCreateWithoutStageInput' })
  },
})

export const ScorelistUpdateWithWhereUniqueWithoutStageInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistUpdateWithWhereUniqueWithoutStageInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ScorelistWhereUniqueInput' })
    t.nonNull.field('data', { type: 'ScorelistUpdateWithoutStageInput' })
  },
})

export const ScorelistUpdateManyWithWhereWithoutStageInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistUpdateManyWithWhereWithoutStageInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ScorelistScalarWhereInput' })
    t.nonNull.field('data', { type: 'ScorelistUpdateManyMutationInput' })
  },
})

export const ScorelistScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ScorelistScalarWhereInput' })
    t.list.field('OR', { type: 'ScorelistScalarWhereInput' })
    t.list.field('NOT', { type: 'ScorelistScalarWhereInput' })
    t.field('id', { type: 'StringFilter' })
    t.field('createAt', { type: 'DateTimeFilter' })
    t.field('lastUpdate', { type: 'DateTimeFilter' })
    t.field('scoreboardId', { type: 'IntNullableFilter' })
    t.field('stageId', { type: 'IntNullableFilter' })
  },
})

export const ScorelistCreateWithoutScoreboardInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistCreateWithoutScoreboardInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createAt', { type: 'DateTime' })
    t.field('lastUpdate', { type: 'DateTime' })
    t.field('stage', { type: 'StageCreateNestedOneWithoutScorelistInput' })
    t.field('scores', { type: 'ScoreCreateNestedManyWithoutScorelistInput' })
  },
})

export const ScorelistUncheckedCreateWithoutScoreboardInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistUncheckedCreateWithoutScoreboardInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createAt', { type: 'DateTime' })
    t.field('lastUpdate', { type: 'DateTime' })
    t.field('stageId', { type: 'Int' })
    t.field('scores', {
      type: 'ScoreUncheckedCreateNestedManyWithoutScorelistInput',
    })
  },
})

export const ScorelistCreateOrConnectWithoutScoreboardInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistCreateOrConnectWithoutScoreboardInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ScorelistWhereUniqueInput' })
    t.nonNull.field('create', { type: 'ScorelistCreateWithoutScoreboardInput' })
  },
})

export const ScorelistCreateManyScoreboardInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistCreateManyScoreboardInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'ScorelistCreateManyScoreboardInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const ScorelistUpsertWithWhereUniqueWithoutScoreboardInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ScorelistUpsertWithWhereUniqueWithoutScoreboardInput',
    definition(t) {
      t.nonNull.field('where', { type: 'ScorelistWhereUniqueInput' })
      t.nonNull.field('update', {
        type: 'ScorelistUpdateWithoutScoreboardInput',
      })
      t.nonNull.field('create', {
        type: 'ScorelistCreateWithoutScoreboardInput',
      })
    },
  })

export const ScorelistUpdateWithWhereUniqueWithoutScoreboardInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ScorelistUpdateWithWhereUniqueWithoutScoreboardInput',
    definition(t) {
      t.nonNull.field('where', { type: 'ScorelistWhereUniqueInput' })
      t.nonNull.field('data', { type: 'ScorelistUpdateWithoutScoreboardInput' })
    },
  })

export const ScorelistUpdateManyWithWhereWithoutScoreboardInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ScorelistUpdateManyWithWhereWithoutScoreboardInput',
    definition(t) {
      t.nonNull.field('where', { type: 'ScorelistScalarWhereInput' })
      t.nonNull.field('data', { type: 'ScorelistUpdateManyMutationInput' })
    },
  })

export const StageCreateWithoutScorelistInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageCreateWithoutScorelistInput',
  definition(t) {
    t.field('createAt', { type: 'DateTime' })
    t.nonNull.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.nonNull.field('papers', { type: 'Int' })
    t.nonNull.field('poppers', { type: 'Int' })
    t.nonNull.field('noshoots', { type: 'Int' })
    t.nonNull.field('gunCondition', { type: 'Int' })
    t.nonNull.field('walkthroughTime', { type: 'Decimal' })
    t.nonNull.field('designer', {
      type: 'ShooterCreateNestedOneWithoutStageInput',
    })
  },
})

export const StageUncheckedCreateWithoutScorelistInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageUncheckedCreateWithoutScorelistInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createAt', { type: 'DateTime' })
    t.nonNull.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.nonNull.field('papers', { type: 'Int' })
    t.nonNull.field('poppers', { type: 'Int' })
    t.nonNull.field('noshoots', { type: 'Int' })
    t.nonNull.field('gunCondition', { type: 'Int' })
    t.nonNull.field('shooterId', { type: 'Int' })
    t.nonNull.field('walkthroughTime', { type: 'Decimal' })
  },
})

export const StageCreateOrConnectWithoutScorelistInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageCreateOrConnectWithoutScorelistInput',
  definition(t) {
    t.nonNull.field('where', { type: 'StageWhereUniqueInput' })
    t.nonNull.field('create', { type: 'StageCreateWithoutScorelistInput' })
  },
})

export const ScoreCreateWithoutScorelistInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreCreateWithoutScorelistInput',
  definition(t) {
    t.nonNull.field('id', { type: 'Int' })
    t.nonNull.field('alphas', { type: 'Int' })
    t.nonNull.field('charlies', { type: 'Int' })
    t.nonNull.field('deltas', { type: 'Int' })
    t.nonNull.field('misses', { type: 'Int' })
    t.nonNull.field('noshoots', { type: 'Int' })
    t.field('poppers', { type: 'Int' })
    t.nonNull.field('time', { type: 'Float' })
    t.nonNull.field('round', { type: 'Int' })
    t.nonNull.field('shooter', {
      type: 'ShooterCreateNestedOneWithoutScoreInput',
    })
    t.field('proErrors', {
      type: 'ProErrorsStoreCreateNestedManyWithoutScoreInput',
    })
  },
})

export const ScoreUncheckedCreateWithoutScorelistInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUncheckedCreateWithoutScorelistInput',
  definition(t) {
    t.nonNull.field('id', { type: 'Int' })
    t.nonNull.field('alphas', { type: 'Int' })
    t.nonNull.field('charlies', { type: 'Int' })
    t.nonNull.field('deltas', { type: 'Int' })
    t.nonNull.field('misses', { type: 'Int' })
    t.nonNull.field('noshoots', { type: 'Int' })
    t.field('poppers', { type: 'Int' })
    t.nonNull.field('time', { type: 'Float' })
    t.nonNull.field('shooterId', { type: 'Int' })
    t.nonNull.field('round', { type: 'Int' })
    t.field('proErrors', {
      type: 'ProErrorsStoreUncheckedCreateNestedManyWithoutScoreInput',
    })
  },
})

export const ScoreCreateOrConnectWithoutScorelistInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreCreateOrConnectWithoutScorelistInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ScoreWhereUniqueInput' })
    t.nonNull.field('create', { type: 'ScoreCreateWithoutScorelistInput' })
  },
})

export const ScoreCreateManyScorelistInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreCreateManyScorelistInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'ScoreCreateManyScorelistInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const ScoreboardCreateWithoutScorelistsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardCreateWithoutScorelistsInput',
  definition(t) {
    t.field('createAt', { type: 'DateTime' })
    t.field('lastUpdate', { type: 'DateTime' })
    t.nonNull.field('name', { type: 'String' })
  },
})

export const ScoreboardUncheckedCreateWithoutScorelistsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardUncheckedCreateWithoutScorelistsInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createAt', { type: 'DateTime' })
    t.field('lastUpdate', { type: 'DateTime' })
    t.nonNull.field('name', { type: 'String' })
  },
})

export const ScoreboardCreateOrConnectWithoutScorelistsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardCreateOrConnectWithoutScorelistsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ScoreboardWhereUniqueInput' })
    t.nonNull.field('create', {
      type: 'ScoreboardCreateWithoutScorelistsInput',
    })
  },
})

export const StageUpsertWithoutScorelistInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageUpsertWithoutScorelistInput',
  definition(t) {
    t.nonNull.field('update', { type: 'StageUpdateWithoutScorelistInput' })
    t.nonNull.field('create', { type: 'StageCreateWithoutScorelistInput' })
    t.field('where', { type: 'StageWhereInput' })
  },
})

export const StageUpdateToOneWithWhereWithoutScorelistInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageUpdateToOneWithWhereWithoutScorelistInput',
  definition(t) {
    t.field('where', { type: 'StageWhereInput' })
    t.nonNull.field('data', { type: 'StageUpdateWithoutScorelistInput' })
  },
})

export const StageUpdateWithoutScorelistInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageUpdateWithoutScorelistInput',
  definition(t) {
    t.field('createAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('papers', { type: 'IntFieldUpdateOperationsInput' })
    t.field('poppers', { type: 'IntFieldUpdateOperationsInput' })
    t.field('noshoots', { type: 'IntFieldUpdateOperationsInput' })
    t.field('gunCondition', { type: 'IntFieldUpdateOperationsInput' })
    t.field('walkthroughTime', { type: 'DecimalFieldUpdateOperationsInput' })
    t.field('designer', {
      type: 'ShooterUpdateOneRequiredWithoutStageNestedInput',
    })
  },
})

export const StageUncheckedUpdateWithoutScorelistInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageUncheckedUpdateWithoutScorelistInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('papers', { type: 'IntFieldUpdateOperationsInput' })
    t.field('poppers', { type: 'IntFieldUpdateOperationsInput' })
    t.field('noshoots', { type: 'IntFieldUpdateOperationsInput' })
    t.field('gunCondition', { type: 'IntFieldUpdateOperationsInput' })
    t.field('shooterId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('walkthroughTime', { type: 'DecimalFieldUpdateOperationsInput' })
  },
})

export const ScoreUpsertWithWhereUniqueWithoutScorelistInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUpsertWithWhereUniqueWithoutScorelistInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ScoreWhereUniqueInput' })
    t.nonNull.field('update', { type: 'ScoreUpdateWithoutScorelistInput' })
    t.nonNull.field('create', { type: 'ScoreCreateWithoutScorelistInput' })
  },
})

export const ScoreUpdateWithWhereUniqueWithoutScorelistInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUpdateWithWhereUniqueWithoutScorelistInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ScoreWhereUniqueInput' })
    t.nonNull.field('data', { type: 'ScoreUpdateWithoutScorelistInput' })
  },
})

export const ScoreUpdateManyWithWhereWithoutScorelistInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUpdateManyWithWhereWithoutScorelistInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ScoreScalarWhereInput' })
    t.nonNull.field('data', { type: 'ScoreUpdateManyMutationInput' })
  },
})

export const ScoreboardUpsertWithoutScorelistsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardUpsertWithoutScorelistsInput',
  definition(t) {
    t.nonNull.field('update', {
      type: 'ScoreboardUpdateWithoutScorelistsInput',
    })
    t.nonNull.field('create', {
      type: 'ScoreboardCreateWithoutScorelistsInput',
    })
    t.field('where', { type: 'ScoreboardWhereInput' })
  },
})

export const ScoreboardUpdateToOneWithWhereWithoutScorelistsInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ScoreboardUpdateToOneWithWhereWithoutScorelistsInput',
    definition(t) {
      t.field('where', { type: 'ScoreboardWhereInput' })
      t.nonNull.field('data', {
        type: 'ScoreboardUpdateWithoutScorelistsInput',
      })
    },
  })

export const ScoreboardUpdateWithoutScorelistsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardUpdateWithoutScorelistsInput',
  definition(t) {
    t.field('createAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('lastUpdate', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const ScoreboardUncheckedUpdateWithoutScorelistsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreboardUncheckedUpdateWithoutScorelistsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('lastUpdate', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const ShooterCreateWithoutScoreInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterCreateWithoutScoreInput',
  definition(t) {
    t.field('createAt', { type: 'DateTime' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('division', { type: 'Division' })
    t.nonNull.field('email', { type: 'String' })
    t.field('stage', { type: 'StageCreateNestedManyWithoutDesignerInput' })
  },
})

export const ShooterUncheckedCreateWithoutScoreInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterUncheckedCreateWithoutScoreInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createAt', { type: 'DateTime' })
    t.nonNull.field('name', { type: 'String' })
    t.nonNull.field('division', { type: 'Division' })
    t.nonNull.field('email', { type: 'String' })
    t.field('stage', {
      type: 'StageUncheckedCreateNestedManyWithoutDesignerInput',
    })
  },
})

export const ShooterCreateOrConnectWithoutScoreInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterCreateOrConnectWithoutScoreInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ShooterWhereUniqueInput' })
    t.nonNull.field('create', { type: 'ShooterCreateWithoutScoreInput' })
  },
})

export const ProErrorsStoreCreateWithoutScoreInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreCreateWithoutScoreInput',
  definition(t) {
    t.nonNull.field('id', { type: 'Int' })
    t.nonNull.field('count', { type: 'Int' })
    t.nonNull.field('proError', {
      type: 'ProErrorObjectsCreateNestedOneWithoutProErrorsStoreInput',
    })
  },
})

export const ProErrorsStoreUncheckedCreateWithoutScoreInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreUncheckedCreateWithoutScoreInput',
  definition(t) {
    t.nonNull.field('id', { type: 'Int' })
    t.nonNull.field('count', { type: 'Int' })
    t.nonNull.field('proErrorObjectsId', { type: 'Int' })
  },
})

export const ProErrorsStoreCreateOrConnectWithoutScoreInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreCreateOrConnectWithoutScoreInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ProErrorsStoreWhereUniqueInput' })
    t.nonNull.field('create', { type: 'ProErrorsStoreCreateWithoutScoreInput' })
  },
})

export const ProErrorsStoreCreateManyScoreInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreCreateManyScoreInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'ProErrorsStoreCreateManyScoreInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const ScorelistCreateWithoutScoresInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistCreateWithoutScoresInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createAt', { type: 'DateTime' })
    t.field('lastUpdate', { type: 'DateTime' })
    t.field('stage', { type: 'StageCreateNestedOneWithoutScorelistInput' })
    t.field('scoreboard', {
      type: 'ScoreboardCreateNestedOneWithoutScorelistsInput',
    })
  },
})

export const ScorelistUncheckedCreateWithoutScoresInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistUncheckedCreateWithoutScoresInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createAt', { type: 'DateTime' })
    t.field('lastUpdate', { type: 'DateTime' })
    t.field('scoreboardId', { type: 'Int' })
    t.field('stageId', { type: 'Int' })
  },
})

export const ScorelistCreateOrConnectWithoutScoresInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistCreateOrConnectWithoutScoresInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ScorelistWhereUniqueInput' })
    t.nonNull.field('create', { type: 'ScorelistCreateWithoutScoresInput' })
  },
})

export const ShooterUpsertWithoutScoreInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterUpsertWithoutScoreInput',
  definition(t) {
    t.nonNull.field('update', { type: 'ShooterUpdateWithoutScoreInput' })
    t.nonNull.field('create', { type: 'ShooterCreateWithoutScoreInput' })
    t.field('where', { type: 'ShooterWhereInput' })
  },
})

export const ShooterUpdateToOneWithWhereWithoutScoreInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterUpdateToOneWithWhereWithoutScoreInput',
  definition(t) {
    t.field('where', { type: 'ShooterWhereInput' })
    t.nonNull.field('data', { type: 'ShooterUpdateWithoutScoreInput' })
  },
})

export const ShooterUpdateWithoutScoreInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterUpdateWithoutScoreInput',
  definition(t) {
    t.field('createAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('division', { type: 'EnumDivisionFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('stage', { type: 'StageUpdateManyWithoutDesignerNestedInput' })
  },
})

export const ShooterUncheckedUpdateWithoutScoreInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ShooterUncheckedUpdateWithoutScoreInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('division', { type: 'EnumDivisionFieldUpdateOperationsInput' })
    t.field('email', { type: 'StringFieldUpdateOperationsInput' })
    t.field('stage', {
      type: 'StageUncheckedUpdateManyWithoutDesignerNestedInput',
    })
  },
})

export const ProErrorsStoreUpsertWithWhereUniqueWithoutScoreInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProErrorsStoreUpsertWithWhereUniqueWithoutScoreInput',
    definition(t) {
      t.nonNull.field('where', { type: 'ProErrorsStoreWhereUniqueInput' })
      t.nonNull.field('update', {
        type: 'ProErrorsStoreUpdateWithoutScoreInput',
      })
      t.nonNull.field('create', {
        type: 'ProErrorsStoreCreateWithoutScoreInput',
      })
    },
  })

export const ProErrorsStoreUpdateWithWhereUniqueWithoutScoreInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProErrorsStoreUpdateWithWhereUniqueWithoutScoreInput',
    definition(t) {
      t.nonNull.field('where', { type: 'ProErrorsStoreWhereUniqueInput' })
      t.nonNull.field('data', { type: 'ProErrorsStoreUpdateWithoutScoreInput' })
    },
  })

export const ProErrorsStoreUpdateManyWithWhereWithoutScoreInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProErrorsStoreUpdateManyWithWhereWithoutScoreInput',
    definition(t) {
      t.nonNull.field('where', { type: 'ProErrorsStoreScalarWhereInput' })
      t.nonNull.field('data', { type: 'ProErrorsStoreUpdateManyMutationInput' })
    },
  })

export const ProErrorsStoreScalarWhereInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreScalarWhereInput',
  definition(t) {
    t.list.field('AND', { type: 'ProErrorsStoreScalarWhereInput' })
    t.list.field('OR', { type: 'ProErrorsStoreScalarWhereInput' })
    t.list.field('NOT', { type: 'ProErrorsStoreScalarWhereInput' })
    t.field('id', { type: 'IntFilter' })
    t.field('count', { type: 'IntFilter' })
    t.field('scoreId', { type: 'IntNullableFilter' })
    t.field('proErrorObjectsId', { type: 'IntFilter' })
  },
})

export const ScorelistUpsertWithoutScoresInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistUpsertWithoutScoresInput',
  definition(t) {
    t.nonNull.field('update', { type: 'ScorelistUpdateWithoutScoresInput' })
    t.nonNull.field('create', { type: 'ScorelistCreateWithoutScoresInput' })
    t.field('where', { type: 'ScorelistWhereInput' })
  },
})

export const ScorelistUpdateToOneWithWhereWithoutScoresInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistUpdateToOneWithWhereWithoutScoresInput',
  definition(t) {
    t.field('where', { type: 'ScorelistWhereInput' })
    t.nonNull.field('data', { type: 'ScorelistUpdateWithoutScoresInput' })
  },
})

export const ScorelistUpdateWithoutScoresInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistUpdateWithoutScoresInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('lastUpdate', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('stage', { type: 'StageUpdateOneWithoutScorelistNestedInput' })
    t.field('scoreboard', {
      type: 'ScoreboardUpdateOneWithoutScorelistsNestedInput',
    })
  },
})

export const ScorelistUncheckedUpdateWithoutScoresInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistUncheckedUpdateWithoutScoresInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('lastUpdate', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('scoreboardId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('stageId', { type: 'NullableIntFieldUpdateOperationsInput' })
  },
})

export const ProErrorsStoreCreateWithoutProErrorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreCreateWithoutProErrorInput',
  definition(t) {
    t.nonNull.field('id', { type: 'Int' })
    t.nonNull.field('count', { type: 'Int' })
    t.field('score', { type: 'ScoreCreateNestedOneWithoutProErrorsInput' })
  },
})

export const ProErrorsStoreUncheckedCreateWithoutProErrorInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProErrorsStoreUncheckedCreateWithoutProErrorInput',
    definition(t) {
      t.nonNull.field('id', { type: 'Int' })
      t.nonNull.field('count', { type: 'Int' })
      t.field('scoreId', { type: 'Int' })
    },
  })

export const ProErrorsStoreCreateOrConnectWithoutProErrorInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProErrorsStoreCreateOrConnectWithoutProErrorInput',
    definition(t) {
      t.nonNull.field('where', { type: 'ProErrorsStoreWhereUniqueInput' })
      t.nonNull.field('create', {
        type: 'ProErrorsStoreCreateWithoutProErrorInput',
      })
    },
  })

export const ProErrorsStoreCreateManyProErrorInputEnvelope = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreCreateManyProErrorInputEnvelope',
  definition(t) {
    t.nonNull.field('data', { type: 'ProErrorsStoreCreateManyProErrorInput' })
    t.field('skipDuplicates', { type: 'Boolean' })
  },
})

export const ProErrorsStoreUpsertWithWhereUniqueWithoutProErrorInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProErrorsStoreUpsertWithWhereUniqueWithoutProErrorInput',
    definition(t) {
      t.nonNull.field('where', { type: 'ProErrorsStoreWhereUniqueInput' })
      t.nonNull.field('update', {
        type: 'ProErrorsStoreUpdateWithoutProErrorInput',
      })
      t.nonNull.field('create', {
        type: 'ProErrorsStoreCreateWithoutProErrorInput',
      })
    },
  })

export const ProErrorsStoreUpdateWithWhereUniqueWithoutProErrorInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProErrorsStoreUpdateWithWhereUniqueWithoutProErrorInput',
    definition(t) {
      t.nonNull.field('where', { type: 'ProErrorsStoreWhereUniqueInput' })
      t.nonNull.field('data', {
        type: 'ProErrorsStoreUpdateWithoutProErrorInput',
      })
    },
  })

export const ProErrorsStoreUpdateManyWithWhereWithoutProErrorInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProErrorsStoreUpdateManyWithWhereWithoutProErrorInput',
    definition(t) {
      t.nonNull.field('where', { type: 'ProErrorsStoreScalarWhereInput' })
      t.nonNull.field('data', { type: 'ProErrorsStoreUpdateManyMutationInput' })
    },
  })

export const ProErrorObjectsCreateWithoutProErrorsStoreInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorObjectsCreateWithoutProErrorsStoreInput',
  definition(t) {
    t.nonNull.field('id', { type: 'Int' })
    t.nonNull.field('index', { type: 'String' })
    t.nonNull.field('title', { type: 'String' })
    t.nonNull.field('description', { type: 'String' })
  },
})

export const ProErrorObjectsUncheckedCreateWithoutProErrorsStoreInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProErrorObjectsUncheckedCreateWithoutProErrorsStoreInput',
    definition(t) {
      t.nonNull.field('id', { type: 'Int' })
      t.nonNull.field('index', { type: 'String' })
      t.nonNull.field('title', { type: 'String' })
      t.nonNull.field('description', { type: 'String' })
    },
  })

export const ProErrorObjectsCreateOrConnectWithoutProErrorsStoreInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProErrorObjectsCreateOrConnectWithoutProErrorsStoreInput',
    definition(t) {
      t.nonNull.field('where', { type: 'ProErrorObjectsWhereUniqueInput' })
      t.nonNull.field('create', {
        type: 'ProErrorObjectsCreateWithoutProErrorsStoreInput',
      })
    },
  })

export const ScoreCreateWithoutProErrorsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreCreateWithoutProErrorsInput',
  definition(t) {
    t.nonNull.field('id', { type: 'Int' })
    t.nonNull.field('alphas', { type: 'Int' })
    t.nonNull.field('charlies', { type: 'Int' })
    t.nonNull.field('deltas', { type: 'Int' })
    t.nonNull.field('misses', { type: 'Int' })
    t.nonNull.field('noshoots', { type: 'Int' })
    t.field('poppers', { type: 'Int' })
    t.nonNull.field('time', { type: 'Float' })
    t.nonNull.field('round', { type: 'Int' })
    t.nonNull.field('shooter', {
      type: 'ShooterCreateNestedOneWithoutScoreInput',
    })
    t.field('scorelist', { type: 'ScorelistCreateNestedOneWithoutScoresInput' })
  },
})

export const ScoreUncheckedCreateWithoutProErrorsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUncheckedCreateWithoutProErrorsInput',
  definition(t) {
    t.nonNull.field('id', { type: 'Int' })
    t.nonNull.field('alphas', { type: 'Int' })
    t.nonNull.field('charlies', { type: 'Int' })
    t.nonNull.field('deltas', { type: 'Int' })
    t.nonNull.field('misses', { type: 'Int' })
    t.nonNull.field('noshoots', { type: 'Int' })
    t.field('poppers', { type: 'Int' })
    t.nonNull.field('time', { type: 'Float' })
    t.field('scorelistId', { type: 'String' })
    t.nonNull.field('shooterId', { type: 'Int' })
    t.nonNull.field('round', { type: 'Int' })
  },
})

export const ScoreCreateOrConnectWithoutProErrorsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreCreateOrConnectWithoutProErrorsInput',
  definition(t) {
    t.nonNull.field('where', { type: 'ScoreWhereUniqueInput' })
    t.nonNull.field('create', { type: 'ScoreCreateWithoutProErrorsInput' })
  },
})

export const ProErrorObjectsUpsertWithoutProErrorsStoreInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorObjectsUpsertWithoutProErrorsStoreInput',
  definition(t) {
    t.nonNull.field('update', {
      type: 'ProErrorObjectsUpdateWithoutProErrorsStoreInput',
    })
    t.nonNull.field('create', {
      type: 'ProErrorObjectsCreateWithoutProErrorsStoreInput',
    })
    t.field('where', { type: 'ProErrorObjectsWhereInput' })
  },
})

export const ProErrorObjectsUpdateToOneWithWhereWithoutProErrorsStoreInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProErrorObjectsUpdateToOneWithWhereWithoutProErrorsStoreInput',
    definition(t) {
      t.field('where', { type: 'ProErrorObjectsWhereInput' })
      t.nonNull.field('data', {
        type: 'ProErrorObjectsUpdateWithoutProErrorsStoreInput',
      })
    },
  })

export const ProErrorObjectsUpdateWithoutProErrorsStoreInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorObjectsUpdateWithoutProErrorsStoreInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('index', { type: 'StringFieldUpdateOperationsInput' })
    t.field('title', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'StringFieldUpdateOperationsInput' })
  },
})

export const ProErrorObjectsUncheckedUpdateWithoutProErrorsStoreInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProErrorObjectsUncheckedUpdateWithoutProErrorsStoreInput',
    definition(t) {
      t.field('id', { type: 'IntFieldUpdateOperationsInput' })
      t.field('index', { type: 'StringFieldUpdateOperationsInput' })
      t.field('title', { type: 'StringFieldUpdateOperationsInput' })
      t.field('description', { type: 'StringFieldUpdateOperationsInput' })
    },
  })

export const ScoreUpsertWithoutProErrorsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUpsertWithoutProErrorsInput',
  definition(t) {
    t.nonNull.field('update', { type: 'ScoreUpdateWithoutProErrorsInput' })
    t.nonNull.field('create', { type: 'ScoreCreateWithoutProErrorsInput' })
    t.field('where', { type: 'ScoreWhereInput' })
  },
})

export const ScoreUpdateToOneWithWhereWithoutProErrorsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUpdateToOneWithWhereWithoutProErrorsInput',
  definition(t) {
    t.field('where', { type: 'ScoreWhereInput' })
    t.nonNull.field('data', { type: 'ScoreUpdateWithoutProErrorsInput' })
  },
})

export const ScoreUpdateWithoutProErrorsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUpdateWithoutProErrorsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('alphas', { type: 'IntFieldUpdateOperationsInput' })
    t.field('charlies', { type: 'IntFieldUpdateOperationsInput' })
    t.field('deltas', { type: 'IntFieldUpdateOperationsInput' })
    t.field('misses', { type: 'IntFieldUpdateOperationsInput' })
    t.field('noshoots', { type: 'IntFieldUpdateOperationsInput' })
    t.field('poppers', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('time', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('round', { type: 'IntFieldUpdateOperationsInput' })
    t.field('shooter', {
      type: 'ShooterUpdateOneRequiredWithoutScoreNestedInput',
    })
    t.field('scorelist', { type: 'ScorelistUpdateOneWithoutScoresNestedInput' })
  },
})

export const ScoreUncheckedUpdateWithoutProErrorsInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUncheckedUpdateWithoutProErrorsInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('alphas', { type: 'IntFieldUpdateOperationsInput' })
    t.field('charlies', { type: 'IntFieldUpdateOperationsInput' })
    t.field('deltas', { type: 'IntFieldUpdateOperationsInput' })
    t.field('misses', { type: 'IntFieldUpdateOperationsInput' })
    t.field('noshoots', { type: 'IntFieldUpdateOperationsInput' })
    t.field('poppers', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('time', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('scorelistId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('shooterId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('round', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const StageCreateManyDesignerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageCreateManyDesignerInput',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createAt', { type: 'DateTime' })
    t.nonNull.field('name', { type: 'String' })
    t.field('description', { type: 'String' })
    t.nonNull.field('papers', { type: 'Int' })
    t.nonNull.field('poppers', { type: 'Int' })
    t.nonNull.field('noshoots', { type: 'Int' })
    t.nonNull.field('gunCondition', { type: 'Int' })
    t.nonNull.field('walkthroughTime', { type: 'Decimal' })
  },
})

export const ScoreCreateManyShooterInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreCreateManyShooterInput',
  definition(t) {
    t.nonNull.field('id', { type: 'Int' })
    t.nonNull.field('alphas', { type: 'Int' })
    t.nonNull.field('charlies', { type: 'Int' })
    t.nonNull.field('deltas', { type: 'Int' })
    t.nonNull.field('misses', { type: 'Int' })
    t.nonNull.field('noshoots', { type: 'Int' })
    t.field('poppers', { type: 'Int' })
    t.nonNull.field('time', { type: 'Float' })
    t.field('scorelistId', { type: 'String' })
    t.nonNull.field('round', { type: 'Int' })
  },
})

export const StageUpdateWithoutDesignerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageUpdateWithoutDesignerInput',
  definition(t) {
    t.field('createAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('papers', { type: 'IntFieldUpdateOperationsInput' })
    t.field('poppers', { type: 'IntFieldUpdateOperationsInput' })
    t.field('noshoots', { type: 'IntFieldUpdateOperationsInput' })
    t.field('gunCondition', { type: 'IntFieldUpdateOperationsInput' })
    t.field('walkthroughTime', { type: 'DecimalFieldUpdateOperationsInput' })
    t.field('Scorelist', { type: 'ScorelistUpdateManyWithoutStageNestedInput' })
  },
})

export const StageUncheckedUpdateWithoutDesignerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageUncheckedUpdateWithoutDesignerInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('papers', { type: 'IntFieldUpdateOperationsInput' })
    t.field('poppers', { type: 'IntFieldUpdateOperationsInput' })
    t.field('noshoots', { type: 'IntFieldUpdateOperationsInput' })
    t.field('gunCondition', { type: 'IntFieldUpdateOperationsInput' })
    t.field('walkthroughTime', { type: 'DecimalFieldUpdateOperationsInput' })
    t.field('Scorelist', {
      type: 'ScorelistUncheckedUpdateManyWithoutStageNestedInput',
    })
  },
})

export const StageUncheckedUpdateManyWithoutDesignerInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'StageUncheckedUpdateManyWithoutDesignerInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('createAt', { type: 'NullableDateTimeFieldUpdateOperationsInput' })
    t.field('name', { type: 'StringFieldUpdateOperationsInput' })
    t.field('description', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('papers', { type: 'IntFieldUpdateOperationsInput' })
    t.field('poppers', { type: 'IntFieldUpdateOperationsInput' })
    t.field('noshoots', { type: 'IntFieldUpdateOperationsInput' })
    t.field('gunCondition', { type: 'IntFieldUpdateOperationsInput' })
    t.field('walkthroughTime', { type: 'DecimalFieldUpdateOperationsInput' })
  },
})

export const ScoreUpdateWithoutShooterInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUpdateWithoutShooterInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('alphas', { type: 'IntFieldUpdateOperationsInput' })
    t.field('charlies', { type: 'IntFieldUpdateOperationsInput' })
    t.field('deltas', { type: 'IntFieldUpdateOperationsInput' })
    t.field('misses', { type: 'IntFieldUpdateOperationsInput' })
    t.field('noshoots', { type: 'IntFieldUpdateOperationsInput' })
    t.field('poppers', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('time', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('round', { type: 'IntFieldUpdateOperationsInput' })
    t.field('proErrors', {
      type: 'ProErrorsStoreUpdateManyWithoutScoreNestedInput',
    })
    t.field('scorelist', { type: 'ScorelistUpdateOneWithoutScoresNestedInput' })
  },
})

export const ScoreUncheckedUpdateWithoutShooterInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUncheckedUpdateWithoutShooterInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('alphas', { type: 'IntFieldUpdateOperationsInput' })
    t.field('charlies', { type: 'IntFieldUpdateOperationsInput' })
    t.field('deltas', { type: 'IntFieldUpdateOperationsInput' })
    t.field('misses', { type: 'IntFieldUpdateOperationsInput' })
    t.field('noshoots', { type: 'IntFieldUpdateOperationsInput' })
    t.field('poppers', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('time', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('scorelistId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('round', { type: 'IntFieldUpdateOperationsInput' })
    t.field('proErrors', {
      type: 'ProErrorsStoreUncheckedUpdateManyWithoutScoreNestedInput',
    })
  },
})

export const ScoreUncheckedUpdateManyWithoutShooterInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUncheckedUpdateManyWithoutShooterInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('alphas', { type: 'IntFieldUpdateOperationsInput' })
    t.field('charlies', { type: 'IntFieldUpdateOperationsInput' })
    t.field('deltas', { type: 'IntFieldUpdateOperationsInput' })
    t.field('misses', { type: 'IntFieldUpdateOperationsInput' })
    t.field('noshoots', { type: 'IntFieldUpdateOperationsInput' })
    t.field('poppers', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('time', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('scorelistId', { type: 'NullableStringFieldUpdateOperationsInput' })
    t.field('round', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const ScorelistCreateManyStageInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistCreateManyStageInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createAt', { type: 'DateTime' })
    t.field('lastUpdate', { type: 'DateTime' })
    t.field('scoreboardId', { type: 'Int' })
  },
})

export const ScorelistUpdateWithoutStageInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistUpdateWithoutStageInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('lastUpdate', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('scores', { type: 'ScoreUpdateManyWithoutScorelistNestedInput' })
    t.field('scoreboard', {
      type: 'ScoreboardUpdateOneWithoutScorelistsNestedInput',
    })
  },
})

export const ScorelistUncheckedUpdateWithoutStageInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistUncheckedUpdateWithoutStageInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('lastUpdate', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('scoreboardId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('scores', {
      type: 'ScoreUncheckedUpdateManyWithoutScorelistNestedInput',
    })
  },
})

export const ScorelistUncheckedUpdateManyWithoutStageInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistUncheckedUpdateManyWithoutStageInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('lastUpdate', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('scoreboardId', { type: 'NullableIntFieldUpdateOperationsInput' })
  },
})

export const ScorelistCreateManyScoreboardInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistCreateManyScoreboardInput',
  definition(t) {
    t.field('id', { type: 'String' })
    t.field('createAt', { type: 'DateTime' })
    t.field('lastUpdate', { type: 'DateTime' })
    t.field('stageId', { type: 'Int' })
  },
})

export const ScorelistUpdateWithoutScoreboardInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistUpdateWithoutScoreboardInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('lastUpdate', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('stage', { type: 'StageUpdateOneWithoutScorelistNestedInput' })
    t.field('scores', { type: 'ScoreUpdateManyWithoutScorelistNestedInput' })
  },
})

export const ScorelistUncheckedUpdateWithoutScoreboardInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScorelistUncheckedUpdateWithoutScoreboardInput',
  definition(t) {
    t.field('id', { type: 'StringFieldUpdateOperationsInput' })
    t.field('createAt', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('lastUpdate', { type: 'DateTimeFieldUpdateOperationsInput' })
    t.field('stageId', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('scores', {
      type: 'ScoreUncheckedUpdateManyWithoutScorelistNestedInput',
    })
  },
})

export const ScorelistUncheckedUpdateManyWithoutScoreboardInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ScorelistUncheckedUpdateManyWithoutScoreboardInput',
    definition(t) {
      t.field('id', { type: 'StringFieldUpdateOperationsInput' })
      t.field('createAt', { type: 'DateTimeFieldUpdateOperationsInput' })
      t.field('lastUpdate', { type: 'DateTimeFieldUpdateOperationsInput' })
      t.field('stageId', { type: 'NullableIntFieldUpdateOperationsInput' })
    },
  })

export const ScoreCreateManyScorelistInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreCreateManyScorelistInput',
  definition(t) {
    t.nonNull.field('id', { type: 'Int' })
    t.nonNull.field('alphas', { type: 'Int' })
    t.nonNull.field('charlies', { type: 'Int' })
    t.nonNull.field('deltas', { type: 'Int' })
    t.nonNull.field('misses', { type: 'Int' })
    t.nonNull.field('noshoots', { type: 'Int' })
    t.field('poppers', { type: 'Int' })
    t.nonNull.field('time', { type: 'Float' })
    t.nonNull.field('shooterId', { type: 'Int' })
    t.nonNull.field('round', { type: 'Int' })
  },
})

export const ScoreUpdateWithoutScorelistInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUpdateWithoutScorelistInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('alphas', { type: 'IntFieldUpdateOperationsInput' })
    t.field('charlies', { type: 'IntFieldUpdateOperationsInput' })
    t.field('deltas', { type: 'IntFieldUpdateOperationsInput' })
    t.field('misses', { type: 'IntFieldUpdateOperationsInput' })
    t.field('noshoots', { type: 'IntFieldUpdateOperationsInput' })
    t.field('poppers', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('time', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('round', { type: 'IntFieldUpdateOperationsInput' })
    t.field('shooter', {
      type: 'ShooterUpdateOneRequiredWithoutScoreNestedInput',
    })
    t.field('proErrors', {
      type: 'ProErrorsStoreUpdateManyWithoutScoreNestedInput',
    })
  },
})

export const ScoreUncheckedUpdateWithoutScorelistInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUncheckedUpdateWithoutScorelistInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('alphas', { type: 'IntFieldUpdateOperationsInput' })
    t.field('charlies', { type: 'IntFieldUpdateOperationsInput' })
    t.field('deltas', { type: 'IntFieldUpdateOperationsInput' })
    t.field('misses', { type: 'IntFieldUpdateOperationsInput' })
    t.field('noshoots', { type: 'IntFieldUpdateOperationsInput' })
    t.field('poppers', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('time', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('shooterId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('round', { type: 'IntFieldUpdateOperationsInput' })
    t.field('proErrors', {
      type: 'ProErrorsStoreUncheckedUpdateManyWithoutScoreNestedInput',
    })
  },
})

export const ScoreUncheckedUpdateManyWithoutScorelistInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ScoreUncheckedUpdateManyWithoutScorelistInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('alphas', { type: 'IntFieldUpdateOperationsInput' })
    t.field('charlies', { type: 'IntFieldUpdateOperationsInput' })
    t.field('deltas', { type: 'IntFieldUpdateOperationsInput' })
    t.field('misses', { type: 'IntFieldUpdateOperationsInput' })
    t.field('noshoots', { type: 'IntFieldUpdateOperationsInput' })
    t.field('poppers', { type: 'NullableIntFieldUpdateOperationsInput' })
    t.field('time', { type: 'FloatFieldUpdateOperationsInput' })
    t.field('shooterId', { type: 'IntFieldUpdateOperationsInput' })
    t.field('round', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const ProErrorsStoreCreateManyScoreInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreCreateManyScoreInput',
  definition(t) {
    t.nonNull.field('id', { type: 'Int' })
    t.nonNull.field('count', { type: 'Int' })
    t.nonNull.field('proErrorObjectsId', { type: 'Int' })
  },
})

export const ProErrorsStoreUpdateWithoutScoreInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreUpdateWithoutScoreInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('count', { type: 'IntFieldUpdateOperationsInput' })
    t.field('proError', {
      type: 'ProErrorObjectsUpdateOneRequiredWithoutProErrorsStoreNestedInput',
    })
  },
})

export const ProErrorsStoreUncheckedUpdateWithoutScoreInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreUncheckedUpdateWithoutScoreInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('count', { type: 'IntFieldUpdateOperationsInput' })
    t.field('proErrorObjectsId', { type: 'IntFieldUpdateOperationsInput' })
  },
})

export const ProErrorsStoreUncheckedUpdateManyWithoutScoreInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProErrorsStoreUncheckedUpdateManyWithoutScoreInput',
    definition(t) {
      t.field('id', { type: 'IntFieldUpdateOperationsInput' })
      t.field('count', { type: 'IntFieldUpdateOperationsInput' })
      t.field('proErrorObjectsId', { type: 'IntFieldUpdateOperationsInput' })
    },
  })

export const ProErrorsStoreCreateManyProErrorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreCreateManyProErrorInput',
  definition(t) {
    t.nonNull.field('id', { type: 'Int' })
    t.nonNull.field('count', { type: 'Int' })
    t.field('scoreId', { type: 'Int' })
  },
})

export const ProErrorsStoreUpdateWithoutProErrorInput = inputObjectType({
  nonNullDefaults: {
    input: false,
  },
  name: 'ProErrorsStoreUpdateWithoutProErrorInput',
  definition(t) {
    t.field('id', { type: 'IntFieldUpdateOperationsInput' })
    t.field('count', { type: 'IntFieldUpdateOperationsInput' })
    t.field('score', { type: 'ScoreUpdateOneWithoutProErrorsNestedInput' })
  },
})

export const ProErrorsStoreUncheckedUpdateWithoutProErrorInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProErrorsStoreUncheckedUpdateWithoutProErrorInput',
    definition(t) {
      t.field('id', { type: 'IntFieldUpdateOperationsInput' })
      t.field('count', { type: 'IntFieldUpdateOperationsInput' })
      t.field('scoreId', { type: 'NullableIntFieldUpdateOperationsInput' })
    },
  })

export const ProErrorsStoreUncheckedUpdateManyWithoutProErrorInput =
  inputObjectType({
    nonNullDefaults: {
      input: false,
    },
    name: 'ProErrorsStoreUncheckedUpdateManyWithoutProErrorInput',
    definition(t) {
      t.field('id', { type: 'IntFieldUpdateOperationsInput' })
      t.field('count', { type: 'IntFieldUpdateOperationsInput' })
      t.field('scoreId', { type: 'NullableIntFieldUpdateOperationsInput' })
    },
  })

export const AggregateShooter = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateShooter',
  definition(t) {
    t.nullable.field('_count', { type: 'ShooterCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'ShooterAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'ShooterSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'ShooterMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'ShooterMaxAggregateOutputType' })
  },
})

export const AggregateStage = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateStage',
  definition(t) {
    t.nullable.field('_count', { type: 'StageCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'StageAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'StageSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'StageMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'StageMaxAggregateOutputType' })
  },
})

export const AggregateScoreboard = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateScoreboard',
  definition(t) {
    t.nullable.field('_count', { type: 'ScoreboardCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'ScoreboardAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'ScoreboardSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'ScoreboardMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'ScoreboardMaxAggregateOutputType' })
  },
})

export const AggregateScorelist = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateScorelist',
  definition(t) {
    t.nullable.field('_count', { type: 'ScorelistCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'ScorelistAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'ScorelistSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'ScorelistMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'ScorelistMaxAggregateOutputType' })
  },
})

export const AggregateScore = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateScore',
  definition(t) {
    t.nullable.field('_count', { type: 'ScoreCountAggregateOutputType' })
    t.nullable.field('_avg', { type: 'ScoreAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'ScoreSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'ScoreMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'ScoreMaxAggregateOutputType' })
  },
})

export const AggregateProErrorObjects = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateProErrorObjects',
  definition(t) {
    t.nullable.field('_count', {
      type: 'ProErrorObjectsCountAggregateOutputType',
    })
    t.nullable.field('_avg', { type: 'ProErrorObjectsAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'ProErrorObjectsSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'ProErrorObjectsMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'ProErrorObjectsMaxAggregateOutputType' })
  },
})

export const AggregateProErrorsStore = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'AggregateProErrorsStore',
  definition(t) {
    t.nullable.field('_count', {
      type: 'ProErrorsStoreCountAggregateOutputType',
    })
    t.nullable.field('_avg', { type: 'ProErrorsStoreAvgAggregateOutputType' })
    t.nullable.field('_sum', { type: 'ProErrorsStoreSumAggregateOutputType' })
    t.nullable.field('_min', { type: 'ProErrorsStoreMinAggregateOutputType' })
    t.nullable.field('_max', { type: 'ProErrorsStoreMaxAggregateOutputType' })
  },
})

export const ShooterCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ShooterCountOutputType',
  definition(t) {
    t.field('stage', { type: 'Int' })
    t.field('score', { type: 'Int' })
  },
})

export const ShooterCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ShooterCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createAt', { type: 'Int' })
    t.field('name', { type: 'Int' })
    t.field('division', { type: 'Int' })
    t.field('email', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const ShooterAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ShooterAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
  },
})

export const ShooterSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ShooterSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
  },
})

export const ShooterMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ShooterMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createAt', { type: 'DateTime' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('division', { type: 'Division' })
    t.nullable.field('email', { type: 'String' })
  },
})

export const ShooterMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ShooterMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createAt', { type: 'DateTime' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('division', { type: 'Division' })
    t.nullable.field('email', { type: 'String' })
  },
})

export const StageCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'StageCountOutputType',
  definition(t) {
    t.field('Scorelist', { type: 'Int' })
  },
})

export const StageCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'StageCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createAt', { type: 'Int' })
    t.field('name', { type: 'Int' })
    t.field('description', { type: 'Int' })
    t.field('papers', { type: 'Int' })
    t.field('poppers', { type: 'Int' })
    t.field('noshoots', { type: 'Int' })
    t.field('gunCondition', { type: 'Int' })
    t.field('shooterId', { type: 'Int' })
    t.field('walkthroughTime', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const StageAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'StageAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('papers', { type: 'Float' })
    t.nullable.field('poppers', { type: 'Float' })
    t.nullable.field('noshoots', { type: 'Float' })
    t.nullable.field('gunCondition', { type: 'Float' })
    t.nullable.field('shooterId', { type: 'Float' })
    t.nullable.field('walkthroughTime', { type: 'Decimal' })
  },
})

export const StageSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'StageSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('papers', { type: 'Int' })
    t.nullable.field('poppers', { type: 'Int' })
    t.nullable.field('noshoots', { type: 'Int' })
    t.nullable.field('gunCondition', { type: 'Int' })
    t.nullable.field('shooterId', { type: 'Int' })
    t.nullable.field('walkthroughTime', { type: 'Decimal' })
  },
})

export const StageMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'StageMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createAt', { type: 'DateTime' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('description', { type: 'String' })
    t.nullable.field('papers', { type: 'Int' })
    t.nullable.field('poppers', { type: 'Int' })
    t.nullable.field('noshoots', { type: 'Int' })
    t.nullable.field('gunCondition', { type: 'Int' })
    t.nullable.field('shooterId', { type: 'Int' })
    t.nullable.field('walkthroughTime', { type: 'Decimal' })
  },
})

export const StageMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'StageMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createAt', { type: 'DateTime' })
    t.nullable.field('name', { type: 'String' })
    t.nullable.field('description', { type: 'String' })
    t.nullable.field('papers', { type: 'Int' })
    t.nullable.field('poppers', { type: 'Int' })
    t.nullable.field('noshoots', { type: 'Int' })
    t.nullable.field('gunCondition', { type: 'Int' })
    t.nullable.field('shooterId', { type: 'Int' })
    t.nullable.field('walkthroughTime', { type: 'Decimal' })
  },
})

export const ScoreboardCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ScoreboardCountOutputType',
  definition(t) {
    t.field('scorelists', { type: 'Int' })
  },
})

export const ScoreboardCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ScoreboardCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createAt', { type: 'Int' })
    t.field('lastUpdate', { type: 'Int' })
    t.field('name', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const ScoreboardAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ScoreboardAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
  },
})

export const ScoreboardSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ScoreboardSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
  },
})

export const ScoreboardMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ScoreboardMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createAt', { type: 'DateTime' })
    t.nullable.field('lastUpdate', { type: 'DateTime' })
    t.nullable.field('name', { type: 'String' })
  },
})

export const ScoreboardMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ScoreboardMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('createAt', { type: 'DateTime' })
    t.nullable.field('lastUpdate', { type: 'DateTime' })
    t.nullable.field('name', { type: 'String' })
  },
})

export const ScorelistCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ScorelistCountOutputType',
  definition(t) {
    t.field('scores', { type: 'Int' })
  },
})

export const ScorelistCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ScorelistCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('createAt', { type: 'Int' })
    t.field('lastUpdate', { type: 'Int' })
    t.field('scoreboardId', { type: 'Int' })
    t.field('stageId', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const ScorelistAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ScorelistAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('scoreboardId', { type: 'Float' })
    t.nullable.field('stageId', { type: 'Float' })
  },
})

export const ScorelistSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ScorelistSumAggregateOutputType',
  definition(t) {
    t.nullable.field('scoreboardId', { type: 'Int' })
    t.nullable.field('stageId', { type: 'Int' })
  },
})

export const ScorelistMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ScorelistMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('createAt', { type: 'DateTime' })
    t.nullable.field('lastUpdate', { type: 'DateTime' })
    t.nullable.field('scoreboardId', { type: 'Int' })
    t.nullable.field('stageId', { type: 'Int' })
  },
})

export const ScorelistMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ScorelistMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'String' })
    t.nullable.field('createAt', { type: 'DateTime' })
    t.nullable.field('lastUpdate', { type: 'DateTime' })
    t.nullable.field('scoreboardId', { type: 'Int' })
    t.nullable.field('stageId', { type: 'Int' })
  },
})

export const ScoreCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ScoreCountOutputType',
  definition(t) {
    t.field('proErrors', { type: 'Int' })
  },
})

export const ScoreCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ScoreCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('alphas', { type: 'Int' })
    t.field('charlies', { type: 'Int' })
    t.field('deltas', { type: 'Int' })
    t.field('misses', { type: 'Int' })
    t.field('noshoots', { type: 'Int' })
    t.field('poppers', { type: 'Int' })
    t.field('time', { type: 'Int' })
    t.field('scorelistId', { type: 'Int' })
    t.field('shooterId', { type: 'Int' })
    t.field('round', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const ScoreAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ScoreAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('alphas', { type: 'Float' })
    t.nullable.field('charlies', { type: 'Float' })
    t.nullable.field('deltas', { type: 'Float' })
    t.nullable.field('misses', { type: 'Float' })
    t.nullable.field('noshoots', { type: 'Float' })
    t.nullable.field('poppers', { type: 'Float' })
    t.nullable.field('time', { type: 'Float' })
    t.nullable.field('shooterId', { type: 'Float' })
    t.nullable.field('round', { type: 'Float' })
  },
})

export const ScoreSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ScoreSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('alphas', { type: 'Int' })
    t.nullable.field('charlies', { type: 'Int' })
    t.nullable.field('deltas', { type: 'Int' })
    t.nullable.field('misses', { type: 'Int' })
    t.nullable.field('noshoots', { type: 'Int' })
    t.nullable.field('poppers', { type: 'Int' })
    t.nullable.field('time', { type: 'Float' })
    t.nullable.field('shooterId', { type: 'Int' })
    t.nullable.field('round', { type: 'Int' })
  },
})

export const ScoreMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ScoreMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('alphas', { type: 'Int' })
    t.nullable.field('charlies', { type: 'Int' })
    t.nullable.field('deltas', { type: 'Int' })
    t.nullable.field('misses', { type: 'Int' })
    t.nullable.field('noshoots', { type: 'Int' })
    t.nullable.field('poppers', { type: 'Int' })
    t.nullable.field('time', { type: 'Float' })
    t.nullable.field('scorelistId', { type: 'String' })
    t.nullable.field('shooterId', { type: 'Int' })
    t.nullable.field('round', { type: 'Int' })
  },
})

export const ScoreMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ScoreMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('alphas', { type: 'Int' })
    t.nullable.field('charlies', { type: 'Int' })
    t.nullable.field('deltas', { type: 'Int' })
    t.nullable.field('misses', { type: 'Int' })
    t.nullable.field('noshoots', { type: 'Int' })
    t.nullable.field('poppers', { type: 'Int' })
    t.nullable.field('time', { type: 'Float' })
    t.nullable.field('scorelistId', { type: 'String' })
    t.nullable.field('shooterId', { type: 'Int' })
    t.nullable.field('round', { type: 'Int' })
  },
})

export const ProErrorObjectsCountOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProErrorObjectsCountOutputType',
  definition(t) {
    t.field('proErrorsStore', { type: 'Int' })
  },
})

export const ProErrorObjectsCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProErrorObjectsCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('index', { type: 'Int' })
    t.field('title', { type: 'Int' })
    t.field('description', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const ProErrorObjectsAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProErrorObjectsAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
  },
})

export const ProErrorObjectsSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProErrorObjectsSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
  },
})

export const ProErrorObjectsMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProErrorObjectsMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('index', { type: 'String' })
    t.nullable.field('title', { type: 'String' })
    t.nullable.field('description', { type: 'String' })
  },
})

export const ProErrorObjectsMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProErrorObjectsMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('index', { type: 'String' })
    t.nullable.field('title', { type: 'String' })
    t.nullable.field('description', { type: 'String' })
  },
})

export const ProErrorsStoreCountAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProErrorsStoreCountAggregateOutputType',
  definition(t) {
    t.field('id', { type: 'Int' })
    t.field('count', { type: 'Int' })
    t.field('scoreId', { type: 'Int' })
    t.field('proErrorObjectsId', { type: 'Int' })
    t.field('_all', { type: 'Int' })
  },
})

export const ProErrorsStoreAvgAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProErrorsStoreAvgAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Float' })
    t.nullable.field('count', { type: 'Float' })
    t.nullable.field('scoreId', { type: 'Float' })
    t.nullable.field('proErrorObjectsId', { type: 'Float' })
  },
})

export const ProErrorsStoreSumAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProErrorsStoreSumAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('count', { type: 'Int' })
    t.nullable.field('scoreId', { type: 'Int' })
    t.nullable.field('proErrorObjectsId', { type: 'Int' })
  },
})

export const ProErrorsStoreMinAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProErrorsStoreMinAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('count', { type: 'Int' })
    t.nullable.field('scoreId', { type: 'Int' })
    t.nullable.field('proErrorObjectsId', { type: 'Int' })
  },
})

export const ProErrorsStoreMaxAggregateOutputType = objectType({
  nonNullDefaults: {
    output: true,
  },
  name: 'ProErrorsStoreMaxAggregateOutputType',
  definition(t) {
    t.nullable.field('id', { type: 'Int' })
    t.nullable.field('count', { type: 'Int' })
    t.nullable.field('scoreId', { type: 'Int' })
    t.nullable.field('proErrorObjectsId', { type: 'Int' })
  },
})
