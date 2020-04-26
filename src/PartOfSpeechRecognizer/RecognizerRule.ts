import PartOfSpeech from './PartOfSpeech';
import Gender from '../Core/Gender';
import NeuralNetwork from './NeuralNetwork';
import NeuralNetworkTrainingData from './NeuralNetworkTrainingData';

export interface RecognizerCondition {
  (word: string, gender: Gender): boolean;
}

export default class RecognizerRule {
  readonly condition: RecognizerCondition;
  readonly cache: NeuralNetworkTrainingData;
  private readonly neuralNetwork: NeuralNetwork;

  constructor(condition: RecognizerCondition, neuralNetwork: NeuralNetwork, cache: NeuralNetworkTrainingData) {
    this.condition = condition;
    this.neuralNetwork = neuralNetwork;
    this.cache = cache;
  }

  /**
   * Applies the part of speech recognizer rule to a given word.
   * Returns a part of speech of a given word.
   */
  apply(word: string): PartOfSpeech {
    if (this.cache[word] != null) {
      return this.cache[word];
    }
    return this.neuralNetwork.activate(word);
  }
}
