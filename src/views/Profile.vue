<script setup>
import PasswordField from './uikit/PasswordField.vue';
</script>
<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h3>Basic Info</h3>

                <div class="grid formgrid">
                    <div class="col-12 mb-2 lg:col-6 lg:mb-0">
                        <IconField>
                            <h5>First name</h5>
                            <InputText type="text" placeholder="First name" />
                        </IconField>
                    </div>
                    <div class="col-12 mb-2 lg:col-6 lg:mb-0">
                        <IconField>
                            <h5>Last name</h5>
                            <InputText type="text" placeholder="Last name" />
                        </IconField>
                    </div>
                </div>
                <div class="grid formgrid">
                    <div class="col-12 mb-2 lg:col-6 lg:mb-0">
                        <IconField>
                            <h5>Number</h5>
                            <InputText type="text" placeholder="+996 000 000 000" />
                        </IconField>
                    </div>
                    <div class="col-12 mb-2 lg:col-6 lg:mb-0">
                        <IconField>
                            <h5>Email</h5>
                            <InputText type="email" placeholder="Email@gmail.com" />
                        </IconField>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="col-12 mb-2 lg:col-12 lg:mb-0">
                    <PasswordField label="Current password" placeholder="Current password" />
                </div>
                <div class="col-12 mb-2 lg:col-12 lg:mb-0">
                    <PasswordField label="New password" placeholder="New password" />
                </div>
                <div class="col-12 mb-2 lg:col-12 lg:mb-0">
                    <PasswordField label="Confirm new password" placeholder="Confirm new password" />
                </div>
            </div>
            <div class="card">
                <h3>O Компании</h3>
            </div>
        </div>
    </div>
</template>
<style></style>