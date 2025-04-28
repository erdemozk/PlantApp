import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  ListRenderItemInfo,
} from 'react-native';
import styles from './style';
import { Button, Icon } from 'elements';
import PaywallContainer, {
  FeatureItem,
  OptionType,
} from 'pageContainers/paywall';

type Props = {
  handleRestore: () => void;
  selectedOption: OptionType;
  featuresData: FeatureItem[];
  handleAgreements: () => void;
  handleClose: () => Promise<void>;
  handleTryFree: () => Promise<void>;
  handleSelectOption: (value: 'month' | 'year') => void;
};

const PaywallScreen: React.FC<Props> = ({
  selectedOption,
  featuresData,
  handleClose,
  handleTryFree,
  handleRestore,
  handleAgreements,
  handleSelectOption,
}) => (
  <SafeAreaView style={styles.safeArea}>
    <Image
      resizeMode="contain"
      style={styles.paywallImage}
      source={require('src/assets/images/paywall.png')}
    />
    <View style={styles.scrollContainer}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={async () => await handleClose()}>
        <Icon name="close" size={10} color="#FFFFFF" />
      </TouchableOpacity>

      <Text style={styles.title}>
        <Text style={styles.titleBold}>PlantApp</Text> Premium
      </Text>
      <Text style={styles.subtitle}>Access All Features</Text>

      <FlatList
        data={featuresData}
        renderItem={({item}: ListRenderItemInfo<FeatureItem>) => (
          <View style={styles.featureCard}>
            <View style={styles.featureIconContainer}>
              <Icon name={item.icon} size={18} />
            </View>
            <Text style={styles.featureTitle}>{item.title}</Text>
            <Text style={styles.featureSubtitle}>{item.subtitle}</Text>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.featuresContainer}
        contentContainerStyle={styles.featuresContentContainer}
      />

      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedOption === 'month' && styles.optionButtonSelected,
          ]}
          onPress={() => handleSelectOption('month')}>
          <View
            style={[
              styles.radioCircle,
              selectedOption === 'month' && styles.radioCircleSelected,
            ]}>
            {selectedOption === 'month' && (
              <View style={styles.radioInnerCircle} />
            )}
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTitle}>1 Month</Text>
            <Text style={styles.optionSubtitle}>
              <Text style={styles.optionSubtitleLight}>$2,99/month</Text>, auto
              renewable
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedOption === 'year' && styles.optionButtonSelected,
          ]}
          onPress={() => handleSelectOption('year')}>
          <View
            style={[
              styles.radioCircle,
              selectedOption === 'year' && styles.radioCircleSelected,
            ]}>
            {selectedOption === 'year' && (
              <View style={styles.radioInnerCircle} />
            )}
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTitle}>1 Year</Text>
            <Text style={styles.optionSubtitle}>
              First 3 days free, then $529,99/year
            </Text>
          </View>
          <View style={styles.saveBadge}>
            <Text style={styles.saveBadgeText}>Save 50%</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Button
        title="Try free for 3 days"
        onPress={async () => await handleTryFree()}
        containerStyle={styles.tryButtonContainer}
      />

      <Text style={styles.disclaimerText}>
        After the 3-day free trial period you'll be charged ₺274.99 per year
        unless you cancel before the trial expires. Yearly Subscription is
        Auto-Renewable
      </Text>

      <Text style={styles.footerLinks}>
        <Text onPress={handleAgreements}>Terms</Text>  •{'  '}
        <Text onPress={handleAgreements}>Privacy</Text>  •{'  '}
        <Text onPress={handleRestore}>Restore</Text>
      </Text>
    </View>
  </SafeAreaView>
);

export default PaywallContainer(PaywallScreen);
