import { useState } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { Searchbar } from 'react-native-paper'
import RepositoryItem from '../RepositoryItem'
import useRepositories from '../../hooks/useRepositories'

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
})

const Dropdown = ({sortBy, setSortBy}) => {
    return (
        <Picker
            selectedValue={sortBy}
            placeholder='Select an item...'
            onValueChange={(itemValue, itemIndex) => setSortBy(itemValue)}>
            <Picker.Item label='Latest repositories' value='CREATED_AT' />
            <Picker.Item label='Highest rated repositories' value='DESC' />
            <Picker.Item label='Lowest rated repositories' value='ASC' />
        </Picker>
    )
}

const ItemSeparator = () => <View style={styles.separator} />

export const RepositoryListContainer = ({ repositories, onEndReach, searchKeyword, setSearchKeyword, sortBy, setSortBy }) => {
    const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : []

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => <RepositoryItem repository={item} />}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.5}
            ListHeaderComponent={<>
                <Searchbar
                    placeholder="Search"
                    onChangeText={setSearchKeyword}
                    value={searchKeyword}
                />
                <Dropdown sortBy={sortBy} setSortBy={setSortBy} />
            </>}
        />
    )
}

const RepositoryList = () => {
    const [sortBy, setSortBy] = useState()
    const [searchKeyword, setSearchKeyword] = useState('')
    
    const { repositories, fetchMore } = useRepositories(sortBy, { searchKeyword, first: 8 })

    const onEndReach = () => fetchMore()

    return <RepositoryListContainer 
            repositories={repositories}
            onEndReach={onEndReach}
            searchKeyword={searchKeyword} 
            setSearchKeyword={setSearchKeyword} 
            sortBy={sortBy} 
            setSortBy={setSortBy} 
            />
}

export default RepositoryList