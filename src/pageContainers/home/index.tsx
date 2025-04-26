import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { fetchCategories } from 'src/store/slicers/categories';
import { fetchQuestions } from 'src/store/slicers/questions';
import { useAppDispatch, useAppSelector } from 'src/store/store';

const HomeLogics = () => {
  const navigation = useNavigation()
  const [searchKey, setSearchKey] = useState('');
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector(state => state.categories);
  const { questions } = useAppSelector(state => state.questions);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchQuestions());
  }, []);

  const handleQuestion = (): void => {};

  const handleCategory = (): void => {};

  const handlePromotion = (): void => navigation.navigate('OnboardingStack', { screen: 'PaywallScreen' });

  const handleChangeText = (text: string): void => setSearchKey(text);

  return {
    questions,
    searchKey,
    categories,
    handleQuestion,
    handleCategory,
    handlePromotion,
    handleChangeText,
  };
};


const HomeContainer = (WrappedComponent: React.FC) => {
  return props => {
    const overviewProps = HomeLogics();
    return <WrappedComponent {...props} {...overviewProps} />;
  };
};

export default HomeContainer;