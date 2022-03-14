<template>
  <section class="message-view">
    <h2>
      Message
    </h2>
    <h3>
      Default
    </h3>
    <div class="message primary">
      Additional description and informations about copywriting.
    </div>

    <h3>
      Types
    </h3>
    <div class="message info">
      Additional description and informations about copywriting.
    </div>
    <div class="message success">
      Additional description and informations about copywriting.
    </div>
    <div class="message warning">
      Additional description and informations about copywriting.
    </div>
    <div class="message danger">
      Additional description and informations about copywriting.
    </div>

    <h3>
      Title & Description
    </h3>
    <div class="message primary">
      <div class="msg-title">
        Info
      </div>
      <div class="msg-description">
        Additional description and informations about copywriting.
      </div>
    </div>

    <div class="message success">
      <div class="msg-title">
        Success
      </div>
      <div class="msg-description">
        Additional description and informations about copywriting.
      </div>
    </div>
    <div class="message warning">
      <div class="msg-title">
        Warning
      </div>
      <div class="msg-description">
        Additional description and informations about copywriting.
      </div>
    </div>
    <div class="message danger">
      <div class="msg-title">
        Error
      </div>
      <div class="msg-description">
        Additional description and informations about copywriting.
      </div>
    </div>

    <h3>
      Title, Description & Icon
    </h3>

    <div class="message-icon info">
      <div class="msg-icon">
        <unicon name="exclamation-circle" fill="#fff" width="30" height="30"></unicon>
      </div>
      <div class="msg-txt">
        <div class="msg-title">
          Info
        </div>
        <div class="msg-description">
          Additional description and informations about copywriting.
        </div>
      </div>
    </div>

    <div class="message-icon success">
      <div class="msg-icon">
        <unicon name="check-circle" fill="#fff" width="30" height="30"></unicon>
      </div>
      <div class="msg-txt">
        <div class="msg-title">
          Success
        </div>
        <div class="msg-description">
          Additional description and informations about copywriting.
        </div>
      </div>
    </div>

    <div class="message-icon warning">
      <div class="msg-icon">
        <unicon name="exclamation-octagon" fill="#fff" width="30" height="30"></unicon>
      </div>
      <div class="msg-txt">
        <div class="msg-title">
          Warning
        </div>
        <div class="msg-description">
          Additional description and informations about copywriting.
        </div>
      </div>
    </div>

    <div class="message-icon danger">
      <div class="msg-icon">
        <unicon name="exclamation-triangle" fill="#fff" width="30" height="30"></unicon>
      </div>
      <div class="msg-txt">
        <div class="msg-title">
          Error
        </div>
        <div class="msg-description">
          Additional description and informations about copywriting.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.message,
.message-icon {
  padding: 1.25rem;
  border-radius: 0.4rem;
  margin: 1rem;
}
.message-icon{
  display: flex;
  align-items: center;
  .msg-txt {
    margin-left: 10px;
  }
}
.msg-title {
  display: block;
  font-weight: bold;
  font-size: 1.2rem;
}
.msg-description {
  font-size: 0.9rem;
}
.primary {
  background-color: $primary;
  color: $white;
}
.info {
  background-color: $info;
  color: $white;
}
.success {
  background-color: $success;
  color: $white;
}
.warning {
  background-color: $warning;
  color: $white;
}
.danger {
  background-color: $danger;
  color: $white;
}
</style>
