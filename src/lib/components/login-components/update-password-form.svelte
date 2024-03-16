<script lang="ts">
	import { enhance } from '$app/forms';
	import { fade } from 'svelte/transition';
	import Loader from '../general-components/loader.svelte';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { ResultModel } from '$lib/types';
	import SuccessUpdatePasswordModal from './success-update-password.svelte';
	import { staticComponent } from '$lib';

	type UpdatePasswordVal = {
		newPassword: string[];
		confirmNewPassword: string[];
	};

	type UpdatePasswordAction = {
		msg: string;
		errors: UpdatePasswordVal;
	};

	let formActionErrors: any = null;
	let updatePasswordLoader = false;
	let dbMessage = '';

	const updatePasswordActionNews: SubmitFunction = () => {
		updatePasswordLoader = true;
		return async ({ result, update }) => {
			const {
				status,
				data: { msg, errors }
			} = result as ResultModel<UpdatePasswordAction>;

			switch (status) {
				case 200:
					$staticComponent.showSuccessUpdatePassModal = true;
					formActionErrors = null;
					updatePasswordLoader = false;
					break;

				case 400:
					dbMessage = '';
					formActionErrors = errors;
					updatePasswordLoader = false;

					break;

				case 401:
					dbMessage = msg;
					formActionErrors = null;
					updatePasswordLoader = false;
					break;
			}
			await update();
		};
	};
</script>

{#if $staticComponent.showSuccessUpdatePassModal}
	<SuccessUpdatePasswordModal />
{/if}

<form
	method="post"
	action="?/updatePasswordAction"
	enctype="multipart/form-data"
	use:enhance={updatePasswordActionNews}
	class="flex flex-col gap-[23px] w-full mt-[21px]"
>
	<div class="flex flex-col gap-2">
		<label for="newPassword" class="text-[22px] text-main">
			New Password

			<input
				id="newPassword"
				type="password"
				name="newPassword"
				class="h-[62px] w-full rounded-lg bg-submain border-[2px] border-main text-[20px] text-main outline-none px-[25px]"
				placeholder=""
			/>
		</label>

		<label for="confirmNewPassword" class="text-[22px] text-main">
			Confirm New Password

			<input
				id="confirmNewPassword"
				type="password"
				name="confirmNewPassword"
				class="h-[62px] w-full rounded-lg bg-submain border-[2px] border-main text-[20px] text-main outline-none px-[25px]"
				placeholder=""
			/>
		</label>
	</div>

	<p class="text-main text-center {dbMessage ? 'flex' : 'hidden'}" transition:fade>{dbMessage}</p>

	{#each formActionErrors?.newPassword ?? [] as errorMsg}
		<p class="text-main" transition:fade>{errorMsg}</p>
	{/each}

	<button class="font-bold text-white flex justify-center w-full bg-main py-[19px] rounded-lg">
		<Loader name="UPDATE PASSWORD" loader={updatePasswordLoader} loaderName="UPDATING..." />
	</button>
</form>
