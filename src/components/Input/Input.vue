<template>
  <section class="inputs">
    <h3>Text Input</h3>
    <div class="text-input">
      <div class="input-wrapper">
        <div class="input-element">
          <label class="input-label">Email address</label>
          <input type="text" placeholder="Email" />
        </div>
        <div class="input-help">This is help text</div>
        <div class="input-error">This field is required</div>
      </div>
    </div>

    <h3>Color Input</h3>
    <div class="text-input">
      <div class="input-wrapper">
        <div class="input-element">
          <label class="input-label">Color</label>
          <input type="color" placeholder="Email" />
        </div>
        <div class="input-help">This is help text</div>
        <div class="input-error">This field is required</div>
      </div>
    </div>

    <h3>Search Input</h3>
    <div class="text-input">
      <div class="input-wrapper">
        <div class="input-elment input-element-search">
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>

    <h3>Slider Input</h3>
    <div class="slider-input">
      <div class="input-wrapper">
        <div class="input-element input-element-range">
          <input type="range" min="0" max="100" />
          <div class="input-element-range-value">100</div>
        </div>
      </div>
    </div>
    <h3>Textarea</h3>
    <div class="textarea-input">
      <div class="input-wrapper">
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
    <h3>Select Input</h3>
    <div class="select-input">
      <div class="input-wrapper">
        <div class="input-element input-element-select">
          <select name="" id="">
            <option value="" hidden="hidden" disabled="disabled">
              Select an option
            </option>
            <option value="first">First</option>
            <option value="second">Second</option>
            <option value="third">Third</option>
            <option value="first">First</option>
          </select>
        </div>
      </div>
    </div>
    <h3>Box Input</h3>
    <div class="box-input">
      <div class="input-wrapper">
        <div class="input-element input-element-checkbox">
          <input type="checkbox" />
          <label for="" class="input-element-decorator"></label>
        </div>
        <label for="" class="input-label input-label-after"
          >This is a checkbox</label
        >
      </div>
    </div>
    <h3>File Input</h3>
    <div class="file-input">
      <div class="file-input-wrapper">
        <div class="input-label input-label-before">
          Select your document to upload
        </div>
        <div class="input-element input-element-file">
          <div class="input-upload-area">
            <input type="file" multiple="multiple" />
            <div class="input-upload-area-mask"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
//General
.input-element {
  max-width: 40em;
  margin-bottom: 2px;
}

.text-input {
  .input-element-date,
  .input-element-datetime,
  .input-element-month,
  .input-element-week {
    min-height: 2.2em;
  }
}
.text-input {
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.3em;
    border: 1px solid #cecece;
    box-sizing: border-box;
    background-color: transparent;
    font-size: 0.9em;
    padding: 0.75em;
    display: block;
    width: 100%;
    font-weight: 400;
    line-height: 1.2em;
    margin: 0;

    min-height: 2.2em;
    &::placeholder {
      color: #a8a8a8;
      line-height: normal;
    }
    &:focus {
      outline: 0;
      border: 1px solid $primary;
    }
  }
}

//Help
.input-help {
  color: #6d6d6d;
  font-size: 0.8em;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 0.25em;
}

//Errors
.input-error {
  color: $danger;
  font-size: 0.9em;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 0.25em;
}

// Lables
.input-label {
  display: block;
  line-height: 1.5;
  font-size: 0.9em;
  font-weight: 600;
  margin-bottom: 0.1em;
}

//Search
.input-element-search {
  position: relative;
  &:before {
    content: "";
    width: 2em;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72.99 72.9"><path fill="%236d6d6d" d="M71.77,66,53.87,48.1A29.94,29.94,0,1,0,30,60a29.52,29.52,0,0,0,18.1-6.1l18,17.8A4,4,0,0,0,69,72.9a4.18,4.18,0,0,0,2.9-1.2A4.09,4.09,0,0,0,71.77,66ZM30.07,51.9a21.9,21.9,0,1,1,15.5-37.4A21.37,21.37,0,0,1,52,30a22,22,0,0,1-6.4,15.5A21.54,21.54,0,0,1,30.07,51.9Z"/></svg>');
    background-size: 1em 1em;
    background-repeat: no-repeat;
    background-position: 50%;
    pointer-events: none;
  }
  input {
    padding-left: 32px;
  }
}

//Color
.text-input {
  input[type="color"] {
    height: 1.1em;
    box-sizing: content-box;
    width: auto;
    min-width: 5em;
    padding: 0.3em 0.5em;
  }
  input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0 0 0 1.5em;
    display: flex;
    align-items: center;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79.17 79.17"><path fill="%236d6d6d" d="M40.8,22.92c-3.4-3.4-4.76-8.44-1-12.24s8.84-2.44,12.24,1c5-5,10.69-13.33,18.81-11.31a11,11,0,0,1,7.62,14.34c-1.26,3.45-4.63,6.06-7.16,8.59-.92.93-3,2.26-3.46,3.46-.42,1,1.82,2.63,2.36,4a8,8,0,0,1-12.42,9.19c-.21-.16-1.35-1.51-1.59-1.51s-.83.83-1,1L49.71,44.9,32.43,62.18c-3.37,3.38-6.6,7.14-10.26,10.21a11,11,0,0,1-4.48,2.28c-1.25.3-3.11-.22-4.18.18-1.28.48-2.42,2.65-3.68,3.4-6.05,3.61-12.64-4-8.46-9.57.73-1,2.53-1.92,3-3a14.46,14.46,0,0,0-.09-2.52,10.75,10.75,0,0,1,3.14-6.77c.92-1,1.93-1.93,2.89-2.9Zm4.4-1.5c4.19,4,8.24,8.24,12.36,12.36,2.06,2.06,5,5.59,8,2.61,4.65-4.62-5-6.8-2.42-10.78C66.3,20.7,76.4,16.48,74.84,9.45,73.62,4,67.12,2.78,63.29,6.32c-2.55,2.36-4.93,4.94-7.39,7.4-.79.78-1.8,2.28-2.88,2.73-2.14.88-3.4-1.62-4.79-2.77-2.58-2.14-6.89-.82-6.53,3C41.89,18.68,43.87,20.09,45.2,21.42Zm-1.45,4.44L27.82,41.79C22,47.57,15.89,53.14,10.41,59.2a8.23,8.23,0,0,0-1.44,2c-.93,2,.25,4.14-.5,6S4.92,69.94,4.3,72a2.34,2.34,0,0,0,2.56,3c1.11-.17,2-1.33,2.71-2.07a11.17,11.17,0,0,1,2.08-2c1.68-.94,4,.17,5.93-.57C20,69.41,22,66.73,23.76,65L34.42,54.3,53.3,35.42Z"/></svg>');
    background-repeat: no-repeat;
    background-size: 0.9em 0.9em;
    background-position: left 0.7em;
  }
  input[type="color"]::-webkit-color-swatch {
    display: block;
    height: 1em;
    border-radius: 0.2em;
    border: 0;
    flex: auto;
  }
  input[type="color"]::-moz-color-swatch {
    display: block;
    height: 1em;
    border-radius: 0.2em;
    border: 0;
    flex: auto;
  }
}

//Slider Range
.slider-input {
  .input-element-range {
    display: flex;
    align-items: center;
  }
  .input-element-range-value {
    font-size: 0.9em;
    line-height: 1;
    margin-left: 0.5em;
    background-color: #efefef;
    padding: 0.25em 0.3em;
    border-radius: 0.25em;
    color: #6d6d6d;
    font-variant-numeric: tabular-nums;
  }
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    font-size: 1em;
    padding: 0.5em 0;
    &:focus {
      outline: 0;
    }
    &::-webkit-slider-thumb {
      cursor: pointer;
      -webkit-appearance: none;
      appearance: none;
      width: 1em;
      height: 1em;
      border-radius: 1em;
      border: 0;
      background-color: $primary;
      margin-top: calc(-0.5em + 2px);
    }
    &::-moz-range-thumb {
      cursor: pointer;
      -moz-appearance: none;
      appearance: none;
      width: 1em;
      height: 1em;
      border-radius: 1em;
      border: 0;
      background-color: $primary;
      margin-top: calc(-0.5em + 2px);
    }
    &::-ms-thumb {
      cursor: pointer;
      appearance: none;
      width: 1em;
      height: 1em;
      border-radius: 1em;
      border: 0;
      background-color: $primary;
      margin-top: calc(-0.5em + 2px);
    }
    &::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 4px;
      background-color: #efefef;
      border-radius: 3px;
      margin: 0;
      padding: 0;
    }
    &::-moz-range-track {
      -moz-appearance: none;
      appearance: none;
      width: 100%;
      height: 4px;
      background-color: #efefef;
      border-radius: 3px;
      margin: 0;
      padding: 0;
    }
  }
}

//Textarea
.textarea-input {
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.3em;
    border: 1px solid #cecece;
    box-sizing: border-box;
    background-color: transparent;
    font-size: 0.9em;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
      Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    padding: 0.75em;
    display: block;
    width: 100%;
    font-weight: 400;
    line-height: 1.2em;
    margin: 0;
    &::-webkit-input-placeholder {
      color: #a8a8a8;
      line-height: normal;
    }
    &::-moz-placeholder {
      color: #a8a8a8;
      line-height: normal;
    }
    &:-ms-input-placeholder {
      color: #a8a8a8;
      line-height: normal;
    }
    &::-ms-input-placeholder {
      color: #a8a8a8;
      line-height: normal;
    }
    &::placeholder {
      color: #a8a8a8;
      line-height: normal;
    }
    &:focus {
      outline: 0;
      border: 1px solid $primary;
    }
  }
}

//Select
.select-input {
  .input-element {
    position: relative;
    &:before {
      content: "";
      width: 0;
      height: 0;
      border-color: #cecece transparent transparent;
      border-style: solid;
      border-width: 0.3em 0.3em 0;
      top: 50%;
      margin-top: -0.1em;
      right: 1em;
      position: absolute;
    }
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      //  border-radius: .3em;
      border: 1px solid #cecece;
      box-sizing: border-box;
      background-color: transparent;
      font-size: 0.9em;
      display: block;
      width: 100%;
      font-weight: 400;
      line-height: 1.2em;
      margin: 0;
      padding: 0.75em 2em 0.75em 0.75em;
      &::-webkit-input-placeholder {
        color: #a8a8a8;
        line-height: normal;
      }
      &::-moz-placeholder {
        color: #a8a8a8;
        line-height: normal;
      }
      &:-ms-input-placeholder {
        color: #a8a8a8;
        line-height: normal;
      }
      &::-ms-input-placeholder {
        color: #a8a8a8;
        line-height: normal;
      }
      &::placeholder {
        color: #a8a8a8;
        line-height: normal;
      }
      &:focus {
        outline: 0;
        border: 1px solid $primary;
      }
    }
  }
}

//Checkbox
/* 
TODO: Fix
**/
.box-input {
  .input-wrapper {
    display: flex;
    align-items: center;
  }
  .input-element {
    overflow: hidden;
    display: flex;
    align-items: center;
    input {
      position: absolute;
      // left: -999px;
      opacity: 0;
      pointer-events: none;
    }

    .input-element-decorator {
      display: block;
      width: 1em;
      height: 1em;
      border-radius: 0.25em;
      border: 1px solid #cecece;
      position: relative;
      &::before {
        content: "";
        display: block;
        background-size: contain;
        background-position: 100%;
        width: calc(100% - 0.125em);
        height: calc(100% - 0.125em);
        box-sizing: border-box;
        position: absolute;
        top: 0.0625em;
        left: 0.0625em;
      }
    }
  }
  input[type="checkbox"]:checked ~ .input-element-decorator {
    border-color: #41b883 !important;
  }
  input[type="checkbox"]:checked ~ .input-element-decorator:before {
    background-color: #41b883;
    -webkit-mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M8.76,56.2c-6.38-6.34,3.26-16,9.64-9.69L38,65.88,80.56,23.29c6.38-6.38,16.07,3.32,9.69,9.69L42.84,80.37a6.83,6.83,0,0,1-9.65,0Z"/></svg>');
    mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M8.76,56.2c-6.38-6.34,3.26-16,9.64-9.69L38,65.88,80.56,23.29c6.38-6.38,16.07,3.32,9.69,9.69L42.84,80.37a6.83,6.83,0,0,1-9.65,0Z"/></svg>');
  }
  input:focus ~ .input-element-decorator {
    border-color: $primary;
  }
  .input-label-after {
    margin-left: 0.5em;
  }
  .input-label-before {
    margin-right: 0.5em;
  }
}

//File
.file-input {
  .input-upload-area {
    width: 100%;
    position: relative;
    padding: 2em 0;
    input {
      cursor: pointer;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      opacity: 0;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 5;
    }
    input-upload-area[data-has-files] {
      padding: 0;
      input {
        display: none;
      }
    }
    input-upload-area-mask {
      border-radius: 0.4em;
      pointer-events: none;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border: 2px dashed #a8a8a8;
      z-index: 2;
      &:before {
        content: "";
        background-color: #a8a8a8;
        -webkit-mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58"><path d="M29,58A29,29,0,1,0,0,29,29,29,0,0,0,29,58ZM29,4A25,25,0,1,1,4,29,25,25,0,0,1,29,4Z"/><polygon points="27 22 27 44.4 31 44.4 31 22 41.7 31.1 44.3 28.1 29 15 13.7 28.1 16.3 31.1 27 22"/></svg>');
        mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58 58"><path d="M29,58A29,29,0,1,0,0,29,29,29,0,0,0,29,58ZM29,4A25,25,0,1,1,4,29,25,25,0,0,1,29,4Z"/><polygon points="27 22 27 44.4 31 44.4 31 22 41.7 31.1 44.3 28.1 29 15 13.7 28.1 16.3 31.1 27 22"/></svg>');
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-position: center;
        mask-position: center;
        width: 2em;
        height: 2em;
        position: absolute;
        pointer-events: none;
      }
    }
  }
}

.file-input .input-upload-area input:focus~.input-upload-area-mask,
.file-input .input-upload-area input:hover~.input-upload-area-mask,
.file-input .input-upload-area input[data-is-drag-hover]~.input-upload-area-mask {
    border-color: $primary
}

</style>
