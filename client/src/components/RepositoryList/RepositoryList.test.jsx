import { render } from '@testing-library/react-native';
import { RepositoryListContainer } from './index';

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
        it('renders repository information correctly', () => {
            const repositories = {
                totalCount: 8,
                pageInfo: {
                hasNextPage: true,
                endCursor:
                    'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                },
                edges: [
                {
                    node: {
                    id: 'jaredpalmer.formik',
                    fullName: 'jaredpalmer/formik',
                    description: 'Build forms in React, without the tears',
                    language: 'TypeScript',
                    forksCount: 1619,
                    stargazersCount: 21856,
                    ratingAverage: 88,
                    reviewCount: 3,
                    ownerAvatarUrl:
                        'https://avatars2.githubusercontent.com/u/4060187?v=4',
                    },
                    cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
                },
                {
                    node: {
                    id: 'async-library.react-async',
                    fullName: 'async-library/react-async',
                    description: 'Flexible promise-based React data loader',
                    language: 'JavaScript',
                    forksCount: 69,
                    stargazersCount: 1760,
                    ratingAverage: 72,
                    reviewCount: 3,
                    ownerAvatarUrl:
                        'https://avatars1.githubusercontent.com/u/54310907?v=4',
                    },
                    cursor:
                    'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
                },
                ],
            };

            const { getAllByTestId, debug } = render(
                <RepositoryListContainer repositories={repositories} />
            );

            const repositoryItems = getAllByTestId('repositoryItem');
            expect(repositoryItems).toHaveLength(2);
            const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;
            expect(firstRepositoryItem).toHaveTextContent('jaredpalmer/formik');
            expect(secondRepositoryItem).toHaveTextContent('async-library/react-async');
            
            expect(firstRepositoryItem).toHaveTextContent(
                "Build forms in React, without the tears"
            );
            expect(secondRepositoryItem).toHaveTextContent(
                "Flexible promise-based React data loader"
            );

            expect(firstRepositoryItem).toHaveTextContent("TypeScript");
            expect(secondRepositoryItem).toHaveTextContent("JavaScript");

            const repositoryInfos = getAllByTestId('repositoryInfo');
            expect(repositoryInfos).toHaveLength(8);
            
            expect(repositoryInfos[0]).toHaveTextContent("21.9k");
            expect(repositoryInfos[1]).toHaveTextContent("1.6k");
            expect(repositoryInfos[2]).toHaveTextContent("3");
            expect(repositoryInfos[3]).toHaveTextContent("88");
            expect(repositoryInfos[4]).toHaveTextContent("1.8k");
            expect(repositoryInfos[5]).toHaveTextContent("69");
            expect(repositoryInfos[6]).toHaveTextContent("3");
            expect(repositoryInfos[7]).toHaveTextContent("72");
        });
    });
});