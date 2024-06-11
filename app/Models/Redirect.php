<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Redirect
 * 
 * @property int $id
 * @property string $from
 * @property string $to
 * @property int $code
 * @property bool $enabled
 * @property int $hits
 * @property Carbon|null $last_hit
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 *
 * @package App\Models
 */
class Redirect extends Model
{
	protected $table = 'redirects';

	protected $casts = [
		'code' => 'int',
		'enabled' => 'bool',
		'hits' => 'int',
		'last_hit' => 'datetime'
	];

	protected $fillable = [
		'from',
		'to',
		'code',
		'enabled',
		'hits',
		'last_hit'
	];
}
