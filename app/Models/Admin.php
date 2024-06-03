<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Admin
 * 
 * @property int $id
 * @property string|null $login
 * @property string|null $fio
 * @property string|null $password
 * @property string|null $role
 * @property bool $ban
 * @property string|null $remember_token
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * 
 * @property Collection|Error[] $errors
 *
 * @package App\Models
 */
class Admin extends Model
{
	protected $table = 'admins';

	protected $casts = [
		'ban' => 'bool'
	];

	protected $hidden = [
		'password',
		'remember_token'
	];

	protected $fillable = [
		'login',
		'fio',
		'password',
		'role',
		'ban',
		'remember_token'
	];

	public function errors()
	{
		return $this->hasMany(Error::class, 'resolver_id');
	}
}
