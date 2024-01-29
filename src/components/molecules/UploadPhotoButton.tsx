import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  memo,
  useCallback,
  useRef,
} from "react";
import { Input } from "@chakra-ui/input";

import { PrimaryButton } from "../atoms/buttons/PrimaryButton";
import { ButtonProps } from "@chakra-ui/react";

type Argument = {
  setPhoto: Dispatch<SetStateAction<string>>;
};

export const UploadPhotoButton: FC<{ argument: Argument } & ButtonProps> = memo(
  ({ argument, ...props }) => {
    const { setPhoto } = argument;
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onClickFileSelect = useCallback(() => {
      if (!inputRef.current) return;
      inputRef.current.click();
    }, []);

    const onChangeFileInput = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length <= 0) return;
        deployment(files);
      },
      []
    );

    const deployment = useCallback((files: FileList) => {
      const file = files[0];
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPhoto(fileReader.result as string);
      };
      fileReader.readAsDataURL(file);
    }, []);

    return (
      <PrimaryButton onClick={onClickFileSelect} {...props}>
        ファイルを選択
        <Input
          ref={inputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={onChangeFileInput}
        />
      </PrimaryButton>
    );
  }
);
