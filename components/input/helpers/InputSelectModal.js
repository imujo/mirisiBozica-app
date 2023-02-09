import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import TouchableOpacityRipple from "../../TouchableOpacityRipple";
import CustomModal from "../../CustomModal";

export default function InputSelectPage({
  modalOpen,
  closeModal,
  options,
  selectedOption,
  setSelectedOption,
  selectModalTitle,
}) {
  return (
    <CustomModal
      isOpen={modalOpen}
      close={closeModal}
      style={localStyles.modal}
      title={selectModalTitle}
    >
      <FlatList
        data={options}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <InputSelectPageItem
            {...item}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            closeModal={closeModal}
          />
        )}
      />
    </CustomModal>
  );
}

function InputSelectPageItem(props) {
  const { id, title } = props.item;
  const { selectedOption, setSelectedOption, navigation, closeModal } = props;

  const select = () => {
    setSelectedOption(id);
    closeModal();
  };

  return (
    <TouchableOpacityRipple onPress={select}>
      <View
        style={[
          localStyles.item,
          selectedOption == id && localStyles.itemSelected,
        ]}
      >
        <Text>{title}</Text>
      </View>
    </TouchableOpacityRipple>
  );
}

const localStyles = StyleSheet.create({
  modal: {
    backgroundColor: "white",
  },
  item: {
    minHeight: 40,
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
  itemSelected: {
    backgroundColor: "lightgray",
  },
});
