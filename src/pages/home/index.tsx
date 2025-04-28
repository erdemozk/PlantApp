import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import { ComponentProps } from 'react'
import { Icon, GradientText } from 'elements';
import { HomeContainer } from 'pageContainers';
import { QuestionCard, CategoryCard } from 'components';

type HomeProps = {
  loading: boolean
  searchKey: string
  handleQuestion: () => void
  handleCategory: () => void
  handlePromotion: () => void
  handleChangeText: (text: string) => void
  questions: ComponentProps<typeof QuestionCard>['item'][]
  categories: ComponentProps<typeof CategoryCard>['item'][]
};

const HomeScreen: React.FC<HomeProps> = ({
  loading,
  questions,
  searchKey,
  categories,
  handleQuestion,
  handleCategory,
  handlePromotion,
  handleChangeText,
}) => (
  <SafeAreaView style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Hi, plant lover!</Text>
        <Text style={styles.welcomeText}>Good Afternoon! ⛅</Text>
      </View>
      <Image
        source={require('src/assets/images/homeHeader.png')}
        style={styles.headerImage}
      />

      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#ABABAB" />
        <TextInput
          value={searchKey}
          style={styles.input}
          onChangeText={handleChangeText}
          placeholder="Search for plants"
          placeholderTextColor="rgba(175, 175, 175, 1)"
        />
      </View>

      <TouchableOpacity
        style={styles.promotionContainer}
        onPress={handlePromotion}>
        <Image
          resizeMode="contain"
          style={styles.mailImage}
          source={require('src/assets/images/mail.png')}
        />
        <View style={styles.promotionTextContainer}>
          <GradientText
            useAngle
            angle={-84}
            colors={['#E4B046', '#E5C990']}
            textStyle={styles.promotionTitle}>
            FREE Premium Available
          </GradientText>
          <GradientText
            useAngle
            angle={78}
            colors={['#F5C25B', '#FFDE9C']}
            textStyle={styles.promotionSubTitle}>
            Tap to upgrade your account!
          </GradientText>
        </View>
        <Icon name="arrow" size={24} color="#D0B070" />
      </TouchableOpacity>

      {!loading && (
        <>
          <Text style={styles.getStartedTitle}>Get Started</Text>
          <FlatList
            horizontal
            data={questions}
            style={styles.questionContainer}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.questionContentContainer}
            renderItem={({item}) => (
              <QuestionCard item={item} onPress={handleQuestion} />
            )}
          />
          <FlatList
            numColumns={2}
            data={categories}
            scrollEnabled={false}
            style={styles.categoriesContainer}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContentContainer}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <CategoryCard
                item={item}
                onPress={handleCategory}
              />
            )}
          />
        </>
      )}
    </ScrollView>
  </SafeAreaView>
);

export default HomeContainer(HomeScreen);
