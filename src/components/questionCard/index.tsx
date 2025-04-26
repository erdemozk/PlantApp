import { ImageBackground, Text, TouchableOpacity } from 'react-native';
import { QuestionItem } from 'src/store/slicers/questions';
import styles from './style';

const QuestionCard: React.FC<QuestionItem> = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <ImageBackground
      style={styles.imageBackground}
      source={{uri: item.image_uri}}>
      <Text style={styles.title}>{item.title}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

export default QuestionCard;
