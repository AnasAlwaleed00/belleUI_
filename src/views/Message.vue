<template>
  <section class="message-view">
    <h2>
      Message
    </h2>
    <h3>
        Default
    </h3>
    <Message type="info" description="Additional description and informations about copywriting."/>
    

    <h3>
        Types
    </h3>
    <Message type="info" description="Info"/>
    <Message type="success" description="Success"/>
    <Message type="warning" description="Warning"/>
    <Message type="error" description="Error"/>

    <h3>
        Title & Description
    </h3>
    <Message title="Info" type="info" description="Additional description and informations about copywriting."/>
    <Message title="Success" type="success" description="Additional description and informations about copywriting."/>
    <Message title="Warning" type="warning" description="Additional description and informations about copywriting."/>
    <Message title="Error" type="error" description="Additional description and informations about copywriting."/>

  </section>
</template>

<script>
export default {
    
};
</script>

<style>

</style>
