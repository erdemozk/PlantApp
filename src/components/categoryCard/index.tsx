import { ImageBackground, Text, TouchableOpacity } from 'react-native';
import { CategoryItem } from 'src/store/slicers/categories';
import styles from './style';

const CategoryCard: React.FC<CategoryItem> = ({item, index, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <ImageBackground
      source={{uri: item.image.url}}
      style={styles.imageBackground}>
      <Text numberOfLines={2} style={styles.title}>
        {item.title}
      </Text>
    </ImageBackground>
  </TouchableOpacity>
);

export default CategoryCard;
