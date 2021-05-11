<template>
  <div id="app">
    <h2>
      Buttons
    </h2>
    <Button label="Default" color="default" />
    <Button label="Primary" color="primary" />
    <Button label="Link" color="link" />
    <h2>
      Severities
    </h2>
    <Button label="Primary" color="primary" />
    <Button label="Secondary" color="secondary" />
    <Button label="Success" color="success" />
    <Button label="Info" color="info" />
    <Button label="Warning" color="warning" />
    <Button label="Help" color="help" />
    <Button label="Danger" color="danger" />
    <h2>
      Rounded
    </h2>
    <Button label="Primary" color="primary" rounded/>
    <Button label="Secondary" color="secondary" rounded/>
    <Button label="Success" color="success" rounded/>
    <Button label="Info" color="info" rounded/>
    <Button label="Warning" color="warning" rounded/>
    <Button label="Help" color="help" rounded/>
    <Button label="Danger" color="danger" rounded gradient g1="red" g2="blue"/>
    <h2>
      Outlined
    </h2>
    <Button label="Primary" color="primary" outlined/>
    <Button label="Secondary" color="secondary" outlined/>
    <Button label="Success" color="success" outlined/>
    <Button label="Info" color="info" outlined/>
    <Button label="Warning" color="warning" outlined/>
    <Button label="Help" color="help" outlined/>
    <Button label="Danger" color="danger" outlined/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
