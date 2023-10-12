<p align="center">
  <img alt="Logo" src="https://i.ibb.co/yfX4kFW/fingers.png" width="200" height="200">
  <p align="center">
    <img alt="version" src="https://img.shields.io/npm/v/tbh-buttons?style=flat-square&color=blue">
    <img alt="Codecov" src="https://img.shields.io/codecov/c/github/jayantur13/tbh-buttons?label=codecov&logo=codecov&style=flat-square">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/jayantur13/tbh-buttons/test.yml?branch=master&color=blue">
    <h3 align="center">tbh-buttons</h3>
    <h4 align="center"><b>Button components for the web.</b></h4>
  </p>
  <p align="center"><a href="#installation">Install</a> • <a href="#features">Features</a> • <a href="#example">Usage/Example</a> • <a href="#supported-attributes">Attributes</a> • <a href="#contributing">Contributing</a></p>
</p>

> Package is usable, but WIP.Demo and source will be [available here](https://github.com/jayantur13/tbhweb),their is no preset style

# Installation

```
//Using npm
npm install tbh-buttons

//Using yarn
yarn add tbh-buttons

//Using CDN
<script src="https://unpkg.com/tbh-buttons@1.0.0/dist/tbh-buttons.min.js"></script>
```

## Features

- Style using CSS,BS or tailwind etc
- Icons from your favourate, react-icons
- Share Util functions for few platforms
- Usable in a toast, dialog or sidebar etc
- Button components for loading, progress, progressbar, download

> If you want more control while sharing, try the platform sdks,if available
> The examples here use share dialog (share url) for simplicity
> Not gauranteed to work on mobile/tablet devices

## Example

```javascript
import { TbBrandFacebook } from "react-icons/tb";
import { Icon, IconButton, IconContainer } from "tbh-buttons";
import { FaWhatsapp } from "react-icons/fa";
import { fbShare, sendWAMessage } from "tbh-buttons";

function App() {
  return (
    <>
      <IconContainer className="holder block my-4 space-x-1 space-y-1">
        <p className="text-xl font-thin my-4">Rounded Button Style</p>
        <IconButton
          type="button"
          className="fb"
          title="fbbtn"
          onClick={() => {
            fbShare("https://github.com");
          }}
        >
          <Icon iconComponent={TbBrandFacebook} className="fbicon" style={{ fontSize: "1rem" }} />
        </IconButton>
        <IconButton
          type="button"
          title="wabtn"
          onClick={() => {
            sendWAMessage("Check out this link at https://w3schools.com");
          }}
          className="bg-green-500 hover:bg-gray-100 transition duration-300 ease-in-out focus:outline-none border-none p-1 h-12 w-12 rounded-full group"
        >
          <Icon
            iconComponent={FaWhatsapp}
            className="text-white flex justify-center items-center transition-colors duration-300 ease group-hover:text-green-500"
          />
        </IconButton>
      </IconContainer>
    </>
  );
}
```

## Supported Attributes

| Component       | Description    | Attributes                       |
| --------------- | -------------- | -------------------------------- |
| Container       | Returns div    | See example (types file as well) |
| Button          | Returns button | See example (types file as well) |
| Icon            | Returns svg    | See example (types file as well) |
| DLButton        | download attr  | See example (types file as well) |
| LoadingButton   | See demo       | See example (types file as well) |
| IndicatorButton | See demo       | See example (types file as well) |
| PBButton        | See demo       | See example (types file as well) |

## Resources

- [React-Icons](https://react-icons.github.io/react-icons/)
- [React-hot-toast](https://react-hot-toast.com/)
- [mui](https://mui.com/)

> Visit above links for their license,as this project uses them.

## Support

Sponsor or star this project.For issues, use discussions or open a new issue.

## Contributing

Contributions are always welcome!

See [Contributing.md](https://github.com/jayantur13/tbh-buttons/blob/master/CONTRIBUTING.md) for ways to get started.

Please adhere to this project's [Code Of Conduct](https://github.com/jayantur13/tbh-buttons/blob/master/CODE_OF_CONDUCT.md).

## License

This project is licensed under the [MIT License](https://github.com/jayantur13/tbh-buttons/blob/master/LICENSE)
