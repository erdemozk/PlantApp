import { ImageBackground, Text, TouchableOpacity } from 'react-native';
import { CategoryItem } from 'src/store/slicers/categories';
import styles from './style';

type CategoryCardProps = {
  item: CategoryItem,
  onPress: () => void
}

const CategoryCard: React.FC<CategoryCardProps> = ({item, onPress}) => (
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
