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
import { Icon, GradientText } from 'elements';
import { HomeContainer } from 'pageContainers';
import { QuestionCard, CategoryCard } from 'components';

const HomeScreen: React.FC = ({
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

      <TouchableOpacity style={styles.promotionContainer} onPress={handlePromotion}>
        <Image
          resizeMode="contain"
          style={styles.mailImage}
          source={require('src/assets/images/mail.png')}
        />
        <View style={{ flex: 10 }}>
          <GradientText
            colors={['#E5C990', '#E4B046']}
            style={styles.promotionTitle}>
            FREE Premium Available
          </GradientText>
          <GradientText
            colors={['#FFDE9C', '#F5C25B']}
            style={styles.promotionSubTitle}
            start={{ x: 0, y: 10 }}
            end={{ x: 0, y: 0 }}
          >
            Tap to upgrade your account!
          </GradientText>
        </View>
        <Icon name="arrow" size={24} color="#D0B070" />
      </TouchableOpacity>

      <Text style={styles.getStartedTitle}>Get Started</Text>
      <FlatList
        horizontal
        data={questions}
        style={styles.questionContainer}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.questionContentContainer}
        renderItem={({ item }) => <QuestionCard item={item} onPress={handleQuestion} />}
      />
      <FlatList
        numColumns={2}
        data={categories}
        scrollEnabled={false}
        style={styles.categoriesContainer}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContentContainer}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item, index }) => <CategoryCard item={item} index={index} onPress={handleCategory} />}
      />
    </ScrollView>
  </SafeAreaView>
);

export default HomeContainer(HomeScreen);
