<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class User
 * 
 * @property int $id
 * @property string|null $name
 * @property string|null $email
 * @property string|null $password
 * @property string|null $avatar
 * @property string|null $profile
 * @property bool $confirmed
 * @property bool $ban
 * @property string|null $remember_token
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Collection|OauthUser[] $oauth_users
 * @property Collection|Review[] $reviews
 *
 * @package App\Models
 */
class User extends Model
{
	protected $table = 'users';

	protected $casts = [
		'confirmed' => 'bool',
		'ban' => 'bool'
	];

	protected $hidden = [
		'password',
		'remember_token'
	];

	protected $fillable = [
		'name',
		'email',
		'password',
		'avatar',
		'profile',
		'confirmed',
		'ban',
		'remember_token'
	];

	public function oauth_users()
	{
		return $this->hasMany(OauthUser::class, 'local_user_id');
	}

	public function reviews()
	{
		return $this->hasMany(Review::class);
	}
}
