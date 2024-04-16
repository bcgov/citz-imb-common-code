import { paramSchemas, querySchemas } from '@/modules/github/schemas';

// Test suite for paramSchemas
describe('paramSchemas', () => {
  // Test case: paramSchemas.getIssues
  it('should validate paramSchemas.getIssues with valid repo name', () => {
    const validData = { repo: 'exampleRepo' };
    expect(paramSchemas.getIssues.safeParse(validData).success).toBe(true);
  });

  // Test case: paramSchemas.getIssues with invalid repo name
  it('should not validate paramSchemas.getIssues with empty repo name', () => {
    const invalidData = { repo: '' };
    expect(paramSchemas.getIssues.safeParse(invalidData).success).toBe(false);
  });
});

// Test suite for querySchemas
describe('querySchemas', () => {
  // Test case: querySchemas.getIssues
  it('should validate querySchemas.getIssues with valid state', () => {
    const validData = { state: 'open' };
    expect(querySchemas.getIssues.safeParse(validData).success).toBe(true);
  });

  // Test case: querySchemas.getIssues with invalid state
  it('should not validate querySchemas.getIssues with invalid state', () => {
    const invalidData = { state: 'invalidState' };
    expect(querySchemas.getIssues.safeParse(invalidData).success).toBe(false);
  });
});
