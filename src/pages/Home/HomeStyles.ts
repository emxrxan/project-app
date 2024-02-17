import { IDialogStyleProps, IDialogStyles, ISeparatorStyleProps, ISeparatorStyles, IStackProps, IStyleFunctionOrObject, mergeStyleSets, mergeStyles } from "@fluentui/react";

export const iconClass = mergeStyles({
    fontSize: 20,
    height: 20,
    width: 20,
  });

export const classNames = mergeStyleSets({
    deepSkyBlue: [{ color: 'green' }, iconClass],
});

export const flexList = mergeStyles({
    margin: "0.5rem",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "0.2rem",
})

export const dialogStyles: IStyleFunctionOrObject<IDialogStyleProps, IDialogStyles> = {
    root:{
        ":hover": {
            cursor: "default"
        }
    }
}

export const StackStyles:IStackProps = {
    style: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row"
    }
}

export const SeparatorStyles:IStyleFunctionOrObject<ISeparatorStyleProps, ISeparatorStyles> = {
    content:{
        padding:"3rem 0",
        fontWeight: "bolder",
    },
    root:{
        "::after": {
            backgroundColor: "#c8c8c8"
        }
    }
}